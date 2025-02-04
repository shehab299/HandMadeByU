import styled from "styled-components";
import { Plus } from "lucide-react";

import ShopListItem from "./ShopListItem";
import Button from "@components/Button";

const ShopDropdownContainer = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: 100%;
  right: 0;
  width: 320px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  padding: 1rem;
  margin-top: 0.5rem;
  display: ${(props) => (props.$isOpen ? "block" : "none")};
  z-index: 1000;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #e1e1e1;
  margin: 0.5rem 0;
`;

interface ShopDropdownProps {
  $isOpen: boolean;
}

function ShopDropdown({ $isOpen }: ShopDropdownProps) {
  return (
    <ShopDropdownContainer $isOpen={$isOpen}>
      <ShopListItem />

      <Divider />

      <Button to="/create-shop">
        <Plus size={18} />
        Create New Shop
      </Button>
    </ShopDropdownContainer>
  );
}

export default ShopDropdown;
