FROM node:20-slim
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
ENV CI="true"

RUN corepack enable
COPY . /app
WORKDIR /app

RUN pnpm install

RUN pnpm run build

EXPOSE 3000
CMD [ "pnpm", "run", "start" ]