/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly BASE_URL: string;
  // add other env variables if needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
} 