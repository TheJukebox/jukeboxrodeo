# jukebox.rodeo

jukebox.rodeo is a Svelte application. You might find it deployed at [jukebox.rodeo](https://jukebox.rodeo)!

## Running the Project

### Docker

You can pull the latest docker release of this project:

```bash
docker pull ghcr.io/thejukebox/jukeblog/jukeblog:latest
```

And then you can run it:

```bash
docker run -p 3000:3000 ghcr.io/thejukebox/jukeblog/jukeblog:latest &
# Or a specific tag
docker run -p 3000:3000 ghcr.io/thejukebox/jukeblog/jukeblog:0.1.0 &
```

You should now be able to reach the application from your browser at `http://127.0.0.1`.

### With npm and Node

You can build and run the project locally with npm and Node:

```bash
# Clone the project
git clone https://gitlab.com/thejukebox/jukeblog.git
cd jukeblog
# Install the dependencies
npm i
# Run the build and make it accessible
npm run build
npm run preview

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
