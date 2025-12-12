import { Racket } from "@/entities/rackets/model/types";
import { ApiResponse, apiWrapper, getApiUrl } from "./api";

export async function fetchProducts(
  options: {
    limit?: number;
    page?: number;
  } = { limit: 10, page: 1 }
): Promise<ApiResponse<Racket[]>> {
  const { limit, page } = options;
  const params = new URLSearchParams({
    page: String(page),
    limit: String(limit),
  });

  const url = getApiUrl(`/products`, params);
  console.log("url", url);
  return apiWrapper(fetch(url));
}
