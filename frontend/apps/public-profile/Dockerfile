FROM node:20-alpine AS base
RUN corepack enable

WORKDIR /app

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml tsconfig.json turbo.json ./COPY packages ./packages
COPY apps/public-profile .apps/public-profile

RUN pnpm install 
RUN pnpm --filter @discboxd/public-profile

EXPOSE 3002
CMD ["pnpm", "--filter", "@discboxd/public-profile", "start"]
