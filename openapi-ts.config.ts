import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
  client: '@hey-api/client-axios',
  input: 'http://localhost:5123/swagger/v1/swagger.json',
  output: './src/apis/salvation',
  services: { asClass: true, },
});
