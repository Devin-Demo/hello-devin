/**
 * @hello-devin/client-sdk
 *
 * Auto-generated OpenAPI client for Hello Devin backend services.
 *
 * Usage:
 *   1. Generate the client:
 *      - From a running backend:  npm run generate
 *      - From an OpenAPI spec file: npm run generate:file
 *
 *   2. Import and use:
 *      import { OpenAPI, AuthService } from '@hello-devin/client-sdk';
 *
 *      // Configure the base URL
 *      OpenAPI.BASE = 'http://localhost:3000';
 *
 *      // Set the auth token
 *      OpenAPI.TOKEN = 'your-jwt-token';
 *
 *      // Call API methods
 *      const result = await AuthService.login({ email: '...', password: '...' });
 */

export * from './generated';
