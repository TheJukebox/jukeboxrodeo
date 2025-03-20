# jukeblog

jukeblog is a Svelte application. You can find it deployed at [](https://jukebox.rodeo)!

## Running the Project

### Docker

You can pull the latest docker release of this project:

```bash
$ docker pull registry.gitlab.com/the_jukebox/jukeblog/jukeblog:latest
```

And then you can run it:

```bash
$ docker run -p 80:3000 egistry.gitlab.com/the_jukebox/jukeblog/jukeblog:latest &
Listening on 0.0.0.0:3000
```

You should now be able to reach the application from your browser at `http://127.0.0.1`.

### With npm and Node

You can build and run the project locally with npm and Node:

```bash
# Clone the project
$ git clone https://gitlab.com/the_jukebox/jukeblog.git
$ cd jukeblog
# Install the dependencies
$ npm i
# Run the build and make it accessible
$ npm run build
$ npm run preview

> jukeblog@0.0.1 preview
> vite preview

  ➜  Local:   http://localhost:4173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
