FROM node:20.10.0 AS development

WORKDIR /app

COPY package.json .
COPY pnpm-lock.yaml .

RUN npm install -g pnpm

RUN pnpm install

COPY . .

EXPOSE 4000

CMD ["pnpm", "start:dev"]