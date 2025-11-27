import { useSuspenseQuery } from "@tanstack/react-query";
import { productQueryKeys } from "../constants/query-key";
import { HTTPMethod, request } from "../request";
import { API_ENDPOINTS } from "../constants/api-endpoints";
import type { ProductInfoRequest, ProductInfoResponse } from "../types/product";

// 작품 정보 조회 API
export const useProductInfo = ({ userId, productId }: ProductInfoRequest) => {
  return useSuspenseQuery({
    queryKey: productQueryKeys.detail(productId),
    queryFn: () => getProductInfo({ userId, productId }),
  });
};

export const getProductInfo = ({ userId, productId }: ProductInfoRequest) => {
  return request<ProductInfoResponse>({
    method: HTTPMethod.GET,
    url: API_ENDPOINTS.PRODUCTS.PRODUCT_INFO(productId),
    query: { userId: userId },
  });
};
