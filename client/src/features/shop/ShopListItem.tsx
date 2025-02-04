import styled from "styled-components";
import { Link } from "react-router";
import { Store } from "lucide-react";

import { useMyShops } from "./hooks/useMyShops";

const ShopList = styled.div`
  max-height: 400px;
  overflow-y: auto;
`;

const ShopItem = styled(Link)`
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

const ShopLogo = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  object-fit: cover;
`;

const ShopInfo = styled.div`
  flex: 1;
`;

const ShopName = styled.h3`
  font-size: 0.875rem;
  font-weight: 600;
  margin: 0;
`;

const ShopDescription = styled.p`
  font-size: 0.75rem;
  color: #666;
  margin: 0.25rem 0 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const NoShopsMessage = styled.div`
  text-align: center;
  font-size: 0.875rem;
  color: #666;
  padding: 1rem 0;
  background-color: #f9f9f9;
  border-radius: 8px;
`;

function ShopListItem() {
  const { shops, isPending } = useMyShops();

  if (isPending) {
    return <NoShopsMessage>Loading your shops...</NoShopsMessage>;
  }

  if (!shops?.length) {
    return <NoShopsMessage>No shops found. Create a new one!</NoShopsMessage>;
  }

  return (
    <ShopList>
      {shops?.map((shop) => (
        <ShopItem key={shop.id} to={`/shop/${shop.id}`}>
          {shop.logo ? (
            <ShopLogo src={shop.logo} alt={shop.name} />
          ) : (
            <Store size={20} />
          )}
          <ShopInfo>
            <ShopName>{shop.name}</ShopName>
            <ShopDescription>{shop.description}</ShopDescription>
          </ShopInfo>
        </ShopItem>
      ))}
    </ShopList>
  );
}

export default ShopListItem;
