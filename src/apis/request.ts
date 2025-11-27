// ky 인스턴스 래퍼함수

import { HTTPError } from "ky";
import { apiClient } from "@/apis/api-client";

export const HTTPMethod = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
  PATCH: "PATCH",
} as const;

export type HTTPMethodType = (typeof HTTPMethod)[keyof typeof HTTPMethod];
type QueryValue = string | number | boolean;

export interface RequestConfig {
  method: HTTPMethodType;
  url: string;
  query?: Record<string, QueryValue>;
  body?: unknown;
}

// Success response: { code, message, data }
interface SuccessResponse<T> {
  code: string;
  message: string;
  data: T;
}

// Error response: { code, message, messageDetail }
interface ErrorResponse {
  code: string;
  message: string;
  messageDetail: string | null;
}

// ky 인스턴스 래퍼 함수
export const request = async <T>(config: RequestConfig): Promise<T> => {
  // T: 응답 성공 시 받는 데이터의 타입
  const { method, url, query, body } = config;

  try {
    const response = await apiClient(url, {
      method,
      searchParams: query as Record<string, string | number | boolean>,
      json: method !== HTTPMethod.GET ? body : undefined, // 자동으로 헤더에 Content-Type: application/json 추가
    }).json<SuccessResponse<T>>();

    return response.data; // 성공 시 data 필드만 추출해서 반환
  } catch (error: unknown) {
    if (error instanceof HTTPError) {
      const errorData = await error.response
        .json<ErrorResponse>()
        .catch(() => null);

      const errorMessage = errorData?.message || "에러 메시지 정의 X";
      const errorCode = errorData?.code || "UNKNOWN_ERROR";
      const errorMessageDetail = errorData?.messageDetail || "UNKNOWN_ERROR";

      if (import.meta.env.DEV) {
        console.error(`[${errorCode}] ${url}`);
        console.error("errorMessage: ", errorMessage);
        console.error("errorMessageDetail", errorMessageDetail);
      }

      throw error;
    }

    if (import.meta.env.DEV) {
      console.error("네트워크 에러");
    }

    throw error;
  }
};
