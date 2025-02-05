import { Link } from "react-router";
import { CreditCard, Settings, ShoppingBag, User } from "lucide-react";
import styled from "styled-components";

import LogoutButton from "@features/auth/logout/LogoutButton";

const Container = styled.div`
  margin-top: 0.5rem;
`;

const Option = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  color: #1a1a1a;
  text-decoration: none;
  font-size: 0.875rem;
  border-radius: 8px;
  transition: all 0.2s;

  &:hover {
    background: #f5f7f9;
    color: var(--color-accent);
  }
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #e1e1e1;
  margin: 0.5rem 0;
`;

function MenuOption() {

  //TODO: implement these routes
  return (
    <Container>
      <Option to="#">
        <User size={18} />
        Profile
      </Option>
      <Option to="#">
        <ShoppingBag size={18} />
        Orders
      </Option>
      <Option to="#">
        <CreditCard size={18} />
        Payment Methods
      </Option>
      <Option to="#">
        <Settings size={18} />
        Settings
      </Option>
      <Divider />
      <LogoutButton />
    </Container>
  );
}

export default MenuOption;
