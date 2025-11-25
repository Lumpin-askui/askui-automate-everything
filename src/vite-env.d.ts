/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GOOGLE_FORM_ACTION?: string;
  readonly VITE_GOOGLE_FORM_FIRST_NAME?: string;
  readonly VITE_GOOGLE_FORM_LAST_NAME?: string;
  readonly VITE_GOOGLE_FORM_EMAIL?: string;
  readonly VITE_GOOGLE_FORM_COMPANY?: string;
  readonly VITE_GOOGLE_FORM_JOB_TITLE?: string;
  readonly VITE_GOOGLE_FORM_COMPANY_SIZE?: string;
  readonly VITE_GOOGLE_FORM_USE_CASE?: string;
  readonly VITE_GOOGLE_FORM_PLATFORM?: string;
  readonly VITE_GOOGLE_FORM_PHONE?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
