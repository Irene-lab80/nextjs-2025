import { Racket } from "@/entities/rackets/model/types";
import { ApiResponse, apiWrapper, getApiUrl } from "./api";

export async function fetchProductMetaById(
  productId: string
): Promise<ApiResponse<{ product: Racket }>> {
  return apiWrapper(fetch(getApiUrl(`/meta/product/${productId}`)));
}
