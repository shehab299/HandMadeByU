import styled from "styled-components";
import { Star } from "lucide-react";
import { useState } from "react";

import { VariantSelector } from "./VariantSelector";
import { QuantitySelector } from "./QuantitySelector";
import { Features } from "./Features";
import ActionButtons from "./ActionButtons";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Category = styled.span`
  color: #666;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #1a1a1a;
  margin: 0;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #666;
`;

const Price = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: #4a90e2;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const OldPrice = styled.span`
  font-size: 1.25rem;
  color: #666;
  text-decoration: line-through;
`;

const Description = styled.p`
  color: #666;
  line-height: 1.6;
`;

interface ProductInfoProps {
  product: {
    category: string;
    name: string;
    price: number;
    oldPrice: number;
    rating: number;
    reviews: number;
    description: string;
    sizes: string[];
  };
}

function ProductInfo({ product }: ProductInfoProps) {
  const [quantity, setQuantity] = useState(1);

  return (
    <Container>
      <div>
        <Category>{product.category}</Category>
        <Title>{product.name}</Title>
        <Rating>
          <Star size={16} fill="#ffd700" />
          <span>{product.rating}</span>
          <span>({product.reviews} reviews)</span>
        </Rating>
      </div>

      <Price>
        ${product.price}
        <OldPrice>${product.oldPrice}</OldPrice>
      </Price>

      <Description>{product.description}</Description>

      <VariantSelector sizes={product.sizes} />
      <QuantitySelector quantity={quantity} onQuantityChange={setQuantity} />

      <ActionButtons />
      <Features />
    </Container>
  );
}

export default ProductInfo;
