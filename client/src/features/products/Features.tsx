import styled from "styled-components";
import { Truck, Package, Shield } from "lucide-react";

const FeaturesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #e1e1e1;
`;

const Feature = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: #f5f7f9;
  border-radius: 8px;
`;

const FeatureText = styled.div`
  display: flex;
  flex-direction: column;
`;

const FeatureTitle = styled.span`
  font-weight: 600;
  color: #1a1a1a;
`;

const FeatureDescription = styled.span`
  font-size: 0.875rem;
  color: #666;
`;

export function Features() {
  return (
    <FeaturesContainer>
      <Feature>
        <Truck size={24} />
        <FeatureText>
          <FeatureTitle>Free Shipping</FeatureTitle>
          <FeatureDescription>On orders over $50</FeatureDescription>
        </FeatureText>
      </Feature>
      <Feature>
        <Package size={24} />
        <FeatureText>
          <FeatureTitle>Easy Returns</FeatureTitle>
          <FeatureDescription>30-day return policy</FeatureDescription>
        </FeatureText>
      </Feature>
      <Feature>
        <Shield size={24} />
        <FeatureText>
          <FeatureTitle>Secure Payment</FeatureTitle>
          <FeatureDescription>100% secure checkout</FeatureDescription>
        </FeatureText>
      </Feature>
    </FeaturesContainer>
  );
}
