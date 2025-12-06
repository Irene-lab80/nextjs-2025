import { rackets } from "../data/mock";

export interface Brand {
  id: number;
  name: string;
}

export interface Racket {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  type: string;
  model: string;
  year: number;
  top10: boolean;
  description: string;
  brandId: number;
  brand: Brand;
}

type SuccessResponse<T> = {
  data: T;
  error: null;
};

type ErrorResponse = {
  data: null;
  error: Error;
};

type ApiResponse<T> = SuccessResponse<T> | ErrorResponse;

export async function apiWrapper<T>(
  promise: Promise<T>,
  errorMessage?: string
): Promise<ApiResponse<T>> {
  try {
    const data = await promise;
    return { data, error: null };
  } catch (error) {
    console.error(errorMessage || "API request failed:", error);

    const apiError =
      error instanceof Error ? error : new Error("Unknown error occurred");

    return { data: null, error: apiError };
  }
}

export async function fetchProducts(): Promise<ApiResponse<Racket[]>> {
  return apiWrapper(Promise.resolve(rackets));
}

export async function fetchProductById(
  id: string
): Promise<ApiResponse<Racket | undefined>> {
  return apiWrapper(
    Promise.resolve(rackets.find((el) => el.id === parseInt(id)))
  );
}
