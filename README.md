# microservice-base-template

A minimal, production-ready building block template for Node.js microservices.

## Project Structure

```
microservice-base-template/
├── src/
│   ├── config/          # Application configuration (env vars)
│   ├── controllers/     # Request handlers
│   ├── middleware/      # Express middleware (error handling, etc.)
│   ├── routes/          # Route definitions
│   ├── services/        # Business logic
│   ├── app.js           # Express app setup
│   └── index.js         # Server entry point
├── tests/               # Jest test files
├── .env.example         # Example environment variables
├── .eslintrc.json       # ESLint configuration
├── .gitignore
├── docker-compose.yaml  # Local development stack
├── Dockerfile           # Multi-stage production image
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 20+
- npm 9+
- Docker & Docker Compose (optional)

### Local Development

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Copy and edit the environment file**

   ```bash
   cp .env.example .env
   ```

3. **Start the development server** (with hot-reload via nodemon)

   ```bash
   npm run dev
   ```

   The service will be available at <http://localhost:3000>.

### Running with Docker Compose

```bash
docker compose up --build
```

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm start` | Start the service in production mode |
| `npm run dev` | Start with nodemon (auto-restart on file changes) |
| `npm test` | Run tests with Jest and generate coverage report |
| `npm run lint` | Lint source and test files |
| `npm run lint:fix` | Auto-fix lint issues |

## API Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/health` | Health check – returns service status and uptime |

## Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `NODE_ENV` | `development` | Runtime environment |
| `SERVICE_NAME` | `microservice-base-template` | Human-readable service name |
| `HOST` | `0.0.0.0` | Bind address |
| `PORT` | `3000` | HTTP port |

## License

Licensed under the [Apache 2.0 License](LICENSE).
