FROM oven-sh/bun:1 AS build

WORKDIR /app

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile
COPY src/ ./src/
RUN bun run build

FROM alpine:3.23.3
WORKDIR /app
COPY --from=build /app/flisol ./flisol

ENTRYPOINT ["./flisol"]
