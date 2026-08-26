type ReportErrorOptions = {
  mechanism?: "manual" | "onerror" | "unhandledrejection" | "react_error_boundary";
  handled?: boolean;
  severity?: "error" | "warning" | "info";
};

type TelemetryEvents = {
  captureException?: (
    error: unknown,
    context?: Record<string, unknown>,
    options?: ReportErrorOptions,
  ) => void;
};

declare global {
  interface Window {
    __editorEvents?: TelemetryEvents;
    __reportRuntimeError?: (payload: {
      message: string;
      stack?: string;
      filename?: string;
    }) => void;
  }
}

/**
 * Report runtime errors to a host/editor telemetry hook when available.
 * Brand-free implementation.
 */
export function reportRuntimeError(error: unknown, context: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  window.__editorEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context,
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error",
    },
  );

  const message =
    error instanceof Response
      ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}`
      : error instanceof Error
        ? error.message
        : String(error);
  window.__reportRuntimeError?.({
    message,
    stack: error instanceof Error ? error.stack : undefined,
    filename: window.location.pathname,
  });
}

/**
 * Deprecated alias kept for compatibility. Update imports to use `reportRuntimeError`.
 */
export const reportLovableError = reportRuntimeError;
