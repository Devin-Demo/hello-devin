# @hello-devin/client-sdk

Auto-generated TypeScript client SDK for Hello Devin backend services, powered by [openapi-typescript-codegen](https://github.com/ferdikoomen/openapi-typescript-codegen).

## Setup

From the repository root:

```bash
yarn install
```

## Generating the Client

### From a running backend

Start the backend server, then generate the client from the live OpenAPI spec:

```bash
# Start the backend (from repo root)
yarn run backend

# Generate the client (from this package directory)
yarn run generate
```

### From an OpenAPI spec file

If you have the OpenAPI spec saved as `openapi.json` in this package directory:

```bash
yarn run generate:file
```

## Building

```bash
yarn run build
```

## Usage

```typescript
import { OpenAPI, AuthService } from '@hello-devin/client-sdk';

// Configure the base URL
OpenAPI.BASE = 'http://localhost:3000';

// Set the auth token (for protected endpoints)
OpenAPI.TOKEN = 'your-jwt-token';

// Register a new user
const result = await AuthService.authControllerRegister({
  email: 'user@example.com',
  password: 'password123',
  firstName: 'John',
  lastName: 'Doe',
});

// Login
const loginResult = await AuthService.authControllerLogin({
  email: 'user@example.com',
  password: 'password123',
});

// Get account (requires auth token)
const account = await AuthService.authControllerGetAccount();
```

## Available Services

- **AppService** - Base application endpoints
- **AuthService** - Authentication endpoints (register, login, account management, password updates)

## Available Models

- `RegisterDto` - Registration request payload
- `LoginDto` - Login request payload
- `UpdateAccountDto` - Account update request payload
- `UpdatePasswordDto` - Password change request payload

## Regenerating the Client

When the backend API changes, regenerate the client by running one of the `generate` scripts above. The generated code lives in `src/generated/` and should be committed to the repository so consumers don't need to generate it themselves.
