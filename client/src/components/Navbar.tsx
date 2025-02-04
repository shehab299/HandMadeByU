import { useState } from "react";
import styled from "styled-components";
import { Heart, ShoppingCart, User, Store, Menu } from "lucide-react";
import { Brand } from "./Brand";
import { SearchBar } from "./SearchBar";
import { NavLink } from "./NavLink";
import { CategoriesMenu } from "./CategoriesMenu";
import ShopDropdown from "@features/shop/ShopDropdown";

const Nav = styled.nav`
  background: white;
  padding: 1rem 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const NavContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
`;

const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #1a1a1a;

  &:hover {
    color: #4a90e2;
  }
`;

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);
  const cartItemsCount = 3;
  const wishlistCount = 5;

  return (
    <Nav>
      <NavContainer>
        <MenuButton onClick={() => setIsMenuOpen(true)}>
          <Menu size={24} />
        </MenuButton>

        <Brand />

        <SearchBar />

        <NavActions>
          <NavLink
            to="/wishlist"
            icon={<Heart size={24} />}
            badgeCount={wishlistCount}
          />

          <div style={{ position: "relative" }}>
            <NavLink
              to="#"
              icon={<Store size={24} />}
              onClick={() => setIsShopDropdownOpen(!isShopDropdownOpen)}
            />
            <ShopDropdown $isOpen={isShopDropdownOpen}/>
          </div>

          <NavLink to="/profile" icon={<User size={24} />} />

          <NavLink
            to="/cart"
            icon={<ShoppingCart size={24} />}
            badgeCount={cartItemsCount}
          />
        </NavActions>
      </NavContainer>

      <CategoriesMenu
        $isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </Nav>
  );
}
