import styled from "styled-components";
import { useParams } from "react-router";
import { useProduct } from "./hooks/useProduct";

const ImageSection = styled.div`
  position: relative;
`;

const MainImage = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
  border-radius: 12px;
`;

function ProductImages() {
  const { shopId, productId } = useParams<{
    shopId: string;
    productId: string;
  }>();

  const { product, isPending } = useProduct({
    productId: productId!,
    shopId: shopId!,
  });

  if (isPending) return;

  return (
    <ImageSection>
      <MainImage src={product?.image} alt="Product" />
    </ImageSection>
  );
}

export default ProductImages;
