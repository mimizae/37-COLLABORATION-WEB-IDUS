import ky from "ky";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// 앱 전역에서 재사용할 공통 HTTP 클라이언트
export const apiClient = ky.create({
  prefixUrl: API_BASE_URL,
  retry: {
    limit: 0, // ky의 기본 자동 재시도 기능 비활성화 (조정 가능)
  },
  hooks: {
    beforeRequest: [
      () => {
        // TODO: 공통으로 넣을 헤더가 생기면 여기에서 처리
      },
    ],
    afterResponse: [
      async (_request, _options, response) => {
        // 성공/실패 응답은 request 함수에서 처리
        return response;
      },
    ],
  },
});
