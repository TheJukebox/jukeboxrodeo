FROM node:20.11.0-alpine3.19

ENV APP_DIR=/app \
    APP_PORT=3000

RUN mkdir $APP_DIR

COPY src/ $APP_DIR/src/
COPY static/ $APP_DIR/static/

COPY .npmrc \
    package.json \
    package-lock.json \
    README.md \
    svelte.config.js \
    tsconfig.json \
    vite.config.ts \
    $APP_DIR

RUN apk update -U && \
    apk cache clean

WORKDIR $APP_DIR

RUN npm ci && \
    npm run build
#RUN npm run build

EXPOSE $APP_PORT

ENTRYPOINT [ "/bin/ash", "-c" ]
CMD [ "node build" ]