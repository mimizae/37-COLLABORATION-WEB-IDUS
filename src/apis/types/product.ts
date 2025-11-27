// 요청, 응답 타입을 정의합니다

export interface ProductInfoRequest {
  productId: number;
  userId: number;
}
export interface ProductInfoResponse {
  id: number;
  name: string;
  authorName: string;
  price: number;
  discountRate: number;
  averageScore: number;
  reviewCount: number;
  salesCount: number;
  imageUrls: string[];
  likeCount: number;
  isLiked: boolean;
}
