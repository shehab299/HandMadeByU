import styled from "styled-components";
import { useMyShops } from "./hooks/useMyShops";
import ShopItem from "./ShopItem";

const List = styled.div`
  max-height: 400px;
  overflow-y: auto;
`;

const Message = styled.div`
  text-align: center;
  font-size: 0.875rem;
  color: #666;
  padding: 1rem 0;
  background-color: #f9f9f9;
  border-radius: 8px;
`;

function ShopList() {
  const { shops, isPending } = useMyShops();

  if (isPending) {
    return <Message>Loading your shops...</Message>;
  }

  if (!shops?.length) {
    return <Message>No shops found. Create a new one!</Message>;
  }

  return (
    <List>
      {shops?.map((shop) => (
        <ShopItem key={shop.id} {...shop} />
      ))}
    </List>
  );
}

export default ShopList;
