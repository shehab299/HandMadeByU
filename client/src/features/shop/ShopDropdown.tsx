import styled from "styled-components";
import { Plus } from "lucide-react";

import ShopList from "./ShopList";
import Button from "@components/Button";

const ShopDropdownContainer = styled.div<{ $isOpen: boolean }>`
  display: ${(props) => (props.$isOpen ? "block" : "none")};
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 1000;

  width: 320px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);

  padding: 1rem;
  margin-top: 0.5rem;
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
      <ShopList />

      <Divider />

      <Button $size="small" to="/create-shop">
        <Plus size={18} />
        Create New Shop
      </Button>
    </ShopDropdownContainer>
  );
}

export default ShopDropdown;
