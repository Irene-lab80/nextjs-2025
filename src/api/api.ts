type SuccessResponse<T> = {
  data: T;
  error: null;
};

type ErrorResponse = {
  data: null;
  error: Error;
};

export type ApiResponse<T> = SuccessResponse<T> | ErrorResponse;

export async function apiWrapper<T>(
  promise: Promise<Response>,
  errorMessage?: string
): Promise<ApiResponse<T>> {
  try {
    const response = await promise;
    console.info("API Response", response);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.info("Response data", data);

    return { data, error: null };
  } catch (error) {
    console.error(errorMessage || "API request failed:", error);

    const apiError =
      error instanceof Error ? error : new Error("Unknown error occurred");

    return { data: null, error: apiError };
  }
}

const BASE_URL = "http://localhost:4000/api";

export function getApiUrl(endpoint: string, params?: URLSearchParams): string {
  const base = `${BASE_URL}/${endpoint}`;

  return params ? `${base}?=${params}}` : base;
}
