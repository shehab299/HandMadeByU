import styled from "styled-components";
import ProductImages from "./ProductImages";
import ProductInfo from "./ProductInfo";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

function ProductView() {
  return (
    <Container>
      <ProductGrid>
        <ProductImages />
        <ProductInfo />
      </ProductGrid>
    </Container>
  );
}

export default ProductView;
