# simple_hello

A simple HTTP server built with NestJS and TypeScript.

## Endpoints

| Method | Path           | Response                              |
|--------|----------------|---------------------------------------|
| GET    | `/`            | `Hello from NestJS!`                  |
| GET    | `/health`      | `{"status":"ok","uptime":...}`        |
| GET    | `/greet/:name` | `{"message":"Hello, <name>!"}`        |
| POST   | `/echo`        | Echoes back the JSON body             |

## Running

```sh
npm install
npm run start:dev          # watch mode (rebuild + restart on change)
npm run build && npm start # production build
```

The server listens on `PORT` (default `3000`).
