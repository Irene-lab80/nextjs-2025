import { Racket } from "@/entities/rackets/model/types";
import { ApiResponse, apiWrapper, getApiUrl } from "./api";

export async function fetchTop10Products(): Promise<ApiResponse<Racket[]>> {
  return apiWrapper(
    fetch(getApiUrl(`/top-10`), {
      next: {
        tags: ["top-10"],
      },
    })
  );
}
