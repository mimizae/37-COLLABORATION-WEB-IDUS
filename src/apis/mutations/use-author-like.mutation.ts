import { API_ENDPOINTS } from "@/apis/constants/api-endpoints";
import { HTTPMethod, request } from "@/apis/request";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type {
  AuthorInfoResponse,
  AuthorLikeRequest,
  AuthorLikeResponse,
} from "../types/author";
import { authorQueryKeys } from "../constants/query-key";

export const postAuthorLike = ({ authorId, userId }: AuthorLikeRequest) => {
  return request<AuthorLikeResponse>({
    method: HTTPMethod.POST,
    url: API_ENDPOINTS.AUTHORS.AUTHOR_LIKES(authorId),
    body: {
      userId: userId,
    },
  });
};

export const useAuthorLikeMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postAuthorLike,
    onMutate: async ({ authorId, userId }) => {
      // 진행 중인 쿼리 취소
      await queryClient.cancelQueries({
        queryKey: [...authorQueryKeys.detail(authorId), userId],
      });

      // 이전 데이터 백업
      const previousData = queryClient.getQueryData<AuthorInfoResponse>([
        ...authorQueryKeys.detail(authorId),
        userId,
      ]);

      // 낙관적 업데이트
      if (previousData) {
        queryClient.setQueryData<AuthorInfoResponse>(
          [...authorQueryKeys.detail(authorId), userId],
          {
            ...previousData,
            isLiked: !previousData.isLiked,
            likeCount: previousData.isLiked
              ? previousData.likeCount - 1
              : previousData.likeCount + 1,
          }
        );
      }

      return { previousData };
    },
    onError: (_err, { authorId, userId }, context) => {
      // 에러 발생 시 이전 데이터로 롤백
      if (context?.previousData) {
        queryClient.setQueryData(
          [...authorQueryKeys.detail(authorId), userId],
          context.previousData
        );
      }
    },
    onSettled: (_data, _error, { authorId, userId }) => {
      // 성공/실패 여부와 관계없이 실제 데이터로 동기화
      queryClient.invalidateQueries({
        queryKey: [...authorQueryKeys.detail(authorId), userId],
      });
    },
  });
};
