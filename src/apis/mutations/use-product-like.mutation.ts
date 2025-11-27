// 작품 좋아요 생성 API

import { API_ENDPOINTS } from "@/apis/constants/api-endpoints";
import { HTTPMethod, request } from "@/apis/request";
import type {
  ProductLikeRequest,
  ProductLikeResponse,
} from "@/apis/types/product";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { productQueryKeys } from "@/apis/constants/query-key";

export const postProductLike = ({ productId, userId }: ProductLikeRequest) => {
  return request<ProductLikeResponse>({
    method: HTTPMethod.POST,
    url: API_ENDPOINTS.PRODUCTS.PRODUCT_LIKES(productId),
    body: {
      userId: userId,
    },
  });
};

export const useProductLikeMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postProductLike,
    onSuccess: (_, { productId }) => {
      queryClient.invalidateQueries({
        queryKey: productQueryKeys.detail(productId),
      });
    },
  });
};
