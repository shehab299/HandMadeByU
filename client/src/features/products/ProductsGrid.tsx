import styled from "styled-components";

// import { products } from "./data";
import ProductCard from "./ProductCard";
import { useShopProducts } from "./hooks/useShopProducts";
import { useParams } from "react-router";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  padding: 2rem;
`;

function ProductsGrid() {
  const { id } = useParams();
  const { products, isPending } = useShopProducts({ shopId: id! });

  if (isPending) return;

  return (
    <Container>
      {Array.isArray(products) && products.length > 0 ? (
        products.map((product) => <ProductCard key={product.id} {...product} />)
      ) : (
        <p>No products available.</p>
      )}
    </Container>
  );
}

export default ProductsGrid;
