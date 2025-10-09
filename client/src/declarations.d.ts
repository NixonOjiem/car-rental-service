declare module 'vue3-google-oauth2';
export function useAuthStore(): any;
// In declarations.d.ts
declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

