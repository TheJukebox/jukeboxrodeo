## Setting up a Vulkan project with Visual Studio Code

Following [the first Vulkan tutorial that popped up online](https://vulkan-tutorial.com) means I'm stuck with whatever instructions they hand me to set up my development environment. Here's the problem: I like the idea of bouncing between machines, and Vulkan is *meant* to be cross-platform. If I can run it everywhere, I want to be able to build it everywhere.

While I was progressing, I was faced with an issue whenever I was away from my desktop. I could remote into my desktop (I actually use [Moonlight](https://moonlight-stream.org/) for this these days, just because it's already there for games), but it's just slightly less comfy than I'd like. I could use Xcode, but... well, who wants to do that if they aren't already? Visual Studio for Mac isn't an option either. So, how about Visual Studio Code?

I miss out on debugging features, sure, but for the sake of this tutorial I'm not really using them yet. I thought maybe this would be a common setup, but I've discovered that the world of game and graphics development is filled with travels down the path of least resistance. Most people just install VS because VS is what you use to develop this stuff.

### Setting up Visual Studio Code

There are a few steps we need to take to prepare Visual Studio Code to build and execute our Vulkan code.

#### Setting Up Includes

We need to tell Visual Studio Code where to find our includes for the project. We can do this with `.vscode/c_cpp_properties.json`:

```json
// .vscode/c_cpp_properties.json
{
    "configurations": [
        {
            "name": "Mac",
            "includePath": [
                "${workspaceFolder}/**",
                // This might actually be a default search path.
                "/usr/local/include/**",
                "/path/to/VulkanSDK/1.3.275.0/macOS/include/**"
            ],
            "defines": [],
            "macFrameworkPath": [
                "/Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX.sdk/System/Library/Frameworks"
            ],
            // You can probably use whichever compiler you want here.
            "compilerPath": "/usr/bin/gcc",
            "cStandard": "c17",
            "cppStandard": "c++17",
            "intelliSenseMode": "macos-clang-x64"
        }
    ],
    "version": 4
}
```

I think there's another way to get this done with `settings.json` or somesuch. This is just what I hacked together after some searches.

#### Building With CMake

CMake provides us a convenient mechanism to build the project. We can use it to link all the required libraries and make sure headers are available to us. You should definitely grab the C/C++ extension for VSC from Microsoft, as well as CMake and CMake Tools!

We can create a `CMakeLists.txt` that looks like this in our project root:

```cmake
cmake_minimum_required(VERSION 3.10)

project(Vulkan)

# Find Vulkan includes and libraries
find_package(Vulkan REQUIRED)

# Find GLFW3 includes and libraries
find_package(glfw3 REQUIRED)

# Include GLM headers
# Important to note that I installed GLM alongisde VulkanSDK.
# You might have installed it standalone, in which case it will be somewhere
# like /usr/local/include or wherever you installed it to.
include_directories(/path/to/VulkanSDK/1.3.275.0/macOS/include/glm)

# Add executable
add_executable(${PROJECT_NAME} src/main.cpp)

# Link GLFW and Vulkan Libraries
target_link_libraries(${PROJECT_NAME} PRIVATE glfw)
target_link_libraries(${PROJECT_NAME} PRIVATE Vulkan::Vulkan)
```

I haven't got as much C/C++ experience as I'd like, so CMake is a little foreign to me, but the gist is that we are finding (using `find_package()`) the includes and libraries we need to build the project. With that done, we link the libraries at the bottom of the configuration. `glm` is required for the tutorial I'm running, so I also include it, but it's a header-only library and I can just point CMake at wherever they live.

Now, at this point, we have everything we need to build the program. The only issue I faced here, is that CMake had some sort of issue running `mmap()` - possibly permissions, maybe due to symlinks? I'm not exactly sure, but even elevating VSC (and CMake as a result) didn't help, so I had to do a couple minutes of digging. I decided to take a look at the VulkanSDK Maintenance Tool, which let me change parts of my install, and I noticed they had an option for `System Global Installation`. This just takes all the installed libraries and includes and places them so that they're available globally on your system - very descriptive name. In practice, that means they'll be at `/usr/local/lib` and `/usr/local/include` on my Mac. That makes `find_package()` happy, because it searches those directories by default, so now `mmap()` could do its thing and load those files into memory.

#### Running Your Program

Running your program and attaching a debugger - in my case `lldb` - requires setting up `.vscode/launch.json`:

 ```json
 // .vscode/launch.json
 {
    "version": "0.2.0",
    "configurations": [
        {
            // Give it a descriptive name - the default "Run" was pretty useless.
            "name": "Run Vulkan program",
            // If you've been messing around with Stackoverflow threads and ChatGPT, you might not have
            // noticed that this type is incorrect for your platform. Make sure you set it correctly.
            // I think even when VSC templates this out, it will get this wrong.
            "type": "cppdbg",
            "request": "launch",
            // Make sure you point this wherever your CMake configuration outputs your executable!
            "program": "${workspaceFolder}/build/Vulkan",
            "args": [],
            "stopAtEntry": false,
            "cwd": "${workspaceFolder}",
            "environment": [],
            "externalConsole": false,
            "MIMode": "lldb",
            "setupCommands": [
                {
                    "description": "Enable pretty-printing for lldb",
                    "text": "plugin load /Applications/Xcode.app/Contents/SharedFrameworks/LLDB.framework/Resources/Python/lldb/__init__.py"
                }
            ]
        }
    ]
}
 ```

 You can customize this to your hearts content, in fact VSC should even template them out for you with a handy `Add Configuration` button in the bottom right of the UI while you have `launch.json` open. This is just the one that it provided me, except I made sure to point it at the correct executable - see the comment for guidance here.

 ### Okay, kick it!

 Now you're good, you can click the handy debug menu in Visual Studio Code, and run your program. If you use this sample code from [the Vulkan tutorial](https://vulkan-tutorial.com/Development_environment), you can test that you pop up a window:

 ```cpp
 #define GLFW_INCLUDE_VULKAN
#include <GLFW/glfw3.h>

#define GLM_FORCE_RADIANS
#define GLM_FORCE_DEPTH_ZERO_TO_ONE
#include <glm/vec4.hpp>
#include <glm/mat4x4.hpp>

#include <iostream>

int main() {
    glfwInit();

    glfwWindowHint(GLFW_CLIENT_API, GLFW_NO_API);
    GLFWwindow* window = glfwCreateWindow(800, 600, "Vulkan window", nullptr, nullptr);

    uint32_t extensionCount = 0;
    vkEnumerateInstanceExtensionProperties(nullptr, &extensionCount, nullptr);

    std::cout << extensionCount << " extensions supported\n";

    glm::mat4 matrix;
    glm::vec4 vec;
    auto test = matrix * vec;

    while(!glfwWindowShouldClose(window)) {
        glfwPollEvents();
    }

    glfwDestroyWindow(window);

    glfwTerminate();

    return 0;
}

 ```