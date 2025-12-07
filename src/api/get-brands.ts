import { Brand } from "@/entities/rackets/model/types";
import { ApiResponse, apiWrapper, getApiUrl } from "./api";

export async function fetchBrands(): Promise<ApiResponse<Brand[]>> {
  return apiWrapper(fetch(getApiUrl(`/brands`)));
}
