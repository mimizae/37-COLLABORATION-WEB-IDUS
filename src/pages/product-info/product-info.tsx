import { Suspense } from "react";
import { MakerInfo } from "@/shared/components/maker-info/maker-info";
import { Carousel } from "./components/carousel/carousel";
import { ProductMainInfo } from "./components/product-main-info/product-main-info";
import { ProductSummary } from "./components/product-summary/product-summary";
import { useProductInfo } from "@/apis/queries/use-product-info.query";

export const ProductInfo = () => {
  const { data: productInfo } = useProductInfo({ userId: 1, productId: 1 });
  return (
    <>
      {/** 캐러셀 */}
      <Carousel
        images={productInfo.imageUrls}
        price={productInfo.price}
        rate={productInfo.discountRate}
      />
      {/** 작품 메인 정보 */}
      <ProductMainInfo data={productInfo} />
      {/** 작품 요약 정보 */}
      <ProductSummary />
      {/** 작가 정보 */}
      <Suspense
        fallback={
          <MakerInfo
            name={data.authorName}
            description="작가 정보를 불러오는 중입니다."
            profileImage={undefined}
          />
        }>
        <AuthorInfoContent />
      </Suspense>
    </>
  );
};
