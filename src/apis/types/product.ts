// 작품 정보 조회 요청 
export interface ProductInfoRequest {
  productId: number;
  userId: number;
}

// 작품 정보 조회 응답
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

// 작품 좋아요 요청
export interface ProductLikeRequest {
  productId: number;
  userId: number;
}

// 작품 좋아요 응답
export interface ProductLikeResponse {
  likeCount: number;
}
