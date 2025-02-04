import styled from "styled-components";

import { products } from "./data";
import ProductCard from "./ProductCard";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  padding: 2rem;
`;

function ProductsGrid() {
  return (
    <Container>
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </Container>
  );
}

export default ProductsGrid;
