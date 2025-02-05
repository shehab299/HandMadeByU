import { useState } from "react";
import { useParams } from "react-router";
import { Star } from "lucide-react";
import styled from "styled-components";

import { VariantSelector } from "./VariantSelector";
import { QuantitySelector } from "./QuantitySelector";
import { Features } from "./Features";
import ActionButtons from "./ActionButtons";
import { useProduct } from "./hooks/useProduct";

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

function ProductInfo() {
  const { shopId, productId } = useParams<{
    shopId: string;
    productId: string;
  }>();

  const { product, isPending } = useProduct({
    productId: productId!,
    shopId: shopId!,
  });

  const [quantity, setQuantity] = useState(1);

  if (isPending) return;

  const { name, price, description } = product!;

  return (
    <Container>
      <div>
        {/*TODO: make it dynamic */}
        <Category>Home Decor</Category>
        <Title>{name}</Title>
        <Rating>
          <Star size={16} fill="#ffd700" />
          <span>4</span>
          <span>(1135 reviews)</span>
        </Rating>
      </div>

      <Price>
        ${price}
        <OldPrice>$180</OldPrice>
      </Price>

      <Description>{description}</Description>

      <VariantSelector sizes={["S", "M", "L"]} />
      <QuantitySelector quantity={quantity} onQuantityChange={setQuantity} />

      <ActionButtons />
      <Features />
    </Container>
  );
}

export default ProductInfo;
