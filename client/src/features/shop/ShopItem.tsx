import styled from "styled-components";
import { Link } from "react-router-dom";
import { Store } from "lucide-react";

import { Shop } from "@types";

const Container = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1rem;

  padding: 0.75rem;
  text-decoration: none;
  color: #1a1a1a;
  border-radius: 8px;
  transition: background-color 0.2s;

  &:hover {
    background: #f5f7f9;
  }
`;

const Logo = styled.img`
  width: 40px;
  height: 40px;
  
  border-radius: 8px;
  object-fit: cover;
`;

const Info = styled.div`
  flex: 1;
`;

const Name = styled.h3`
  font-size: 0.875rem;
  font-weight: 600;
  
  margin: 0;
`;

const Description = styled.p`
  font-size: 0.75rem;
  color: #666;
  margin: 0.25rem 0 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

function ShopItem({ id, logo, name, description }: Shop) {
  return (
    <Container key={id} to={`/shop/${id}`}>
      {logo ? <Logo src={logo} alt={name} /> : <Store size={20} />}
      <Info>
        <Name>{name}</Name>
        <Description>{description}</Description>
      </Info>
    </Container>
  );
}

export default ShopItem;
