// src/types/google-oauth.d.ts

// This declares the module and tells TypeScript to treat it as a valid, but untyped, import.
declare module 'vue3-google-oauth2';

// Optional: For slightly better type safety, you can declare the shape of the plugin:
/*
declare module 'vue3-google-oauth2' {
  import type { App } from 'vue';

  interface GAuthOptions {
    clientId: string;
    scope?: string;
    prompt?: string;
    // Add other properties if you use them
  }

  const gAuthPlugin: {
    install(app: App, options: GAuthOptions): void;
  };

  export default gAuthPlugin;
}
*/
