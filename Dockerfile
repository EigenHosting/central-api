FROM node:20 AS base

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN corepack enable && pnpm install

COPY . .
RUN pnpm run build

ENV NODE_ENV=production
EXPOSE 3000

CMD ["node", "dist/index.js"]