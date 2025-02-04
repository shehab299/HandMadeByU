import { Product } from "@types";
import { Star } from "lucide-react";
import { useNavigate } from "react-router";
import styled from "styled-components";

const Container = styled.div`
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProductInfo = styled.div`
  padding: 1rem;
`;

const ProductName = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
  color: #1a1a1a;
`;

const ProductPrice = styled.p`
  font-size: 1.125rem;
  font-weight: 700;
  color: #4a90e2;
  margin: 0.5rem 0;
`;

const ProductRating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: #666;
  font-size: 0.875rem;
`;

function ProductCard({ id, image, name, price, rating }: Product) {
  const navigate = useNavigate();

  return (
    <Container onClick={() => navigate(`/product/${id}`)} key={id}>
      <ProductImage src={image} alt={name} />
      <ProductInfo>
        <ProductName>{name}</ProductName>
        <ProductPrice>${price}</ProductPrice>
        <ProductRating>
          <Star size={16} fill="#ffd700" />
          {rating}
        </ProductRating>
      </ProductInfo>
    </Container>
  );
}

export default ProductCard;
