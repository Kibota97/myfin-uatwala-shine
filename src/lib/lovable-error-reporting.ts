// Deprecated shim: re-export the brand-free error reporting API.
// Remove this file once all imports use `src/lib/error-reporting.ts`.
export { reportRuntimeError as reportLovableError } from "./error-reporting";
