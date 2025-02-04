import { useState } from "react";
import { Link } from "react-router";

import styled from "styled-components";

import {
  Heart,
  ShoppingCart,
  User,
  Store,
  Menu,
  Search,
  X,
} from "lucide-react";

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

const Brand = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  color: #1a1a1a;
  font-size: 1.5rem;
  font-weight: 700;
  min-width: max-content;
`;

const SearchContainer = styled.div`
  flex: 1;
  max-width: 600px;
  position: relative;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 2.75rem;
  border: 2px solid #e1e1e1;
  border-radius: 8px;
  font-size: 0.875rem;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: #4a90e2;
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
`;

const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const NavLink = styled(Link)`
  color: #1a1a1a;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  position: relative;

  &:hover {
    color: #4a90e2;
  }
`;

const Badge = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background: #e53e3e;
  color: white;
  font-size: 0.75rem;
  padding: 0.125rem 0.375rem;
  border-radius: 9999px;
  min-width: 18px;
  text-align: center;
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

const CategoriesMenu = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 300px;
  background: white;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  transform: translateX(${(props) => (props.isOpen ? "0" : "-100%")});
  transition: transform 0.3s ease-in-out;
  z-index: 1001;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  color: #1a1a1a;

  &:hover {
    color: #4a90e2;
  }
`;

const CategoryList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 2rem 0;
`;

const CategoryItem = styled.li`
  margin-bottom: 1rem;

  a {
    color: #1a1a1a;
    text-decoration: none;
    font-size: 1rem;
    display: block;
    padding: 0.5rem 0;
    transition: color 0.2s;

    &:hover {
      color: #4a90e2;
    }
  }
`;

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartItemsCount = 3; // Replace with actual cart items count
  const wishlistCount = 5; // Replace with actual wishlist count

  return (
    <Nav>
      <NavContainer>
        <MenuButton onClick={() => setIsMenuOpen(true)}>
          <Menu size={24} />
        </MenuButton>

        <Brand to="/">
          <Store size={24} />
          ShopHub
        </Brand>

        <SearchContainer>
          <SearchIcon>
            <Search size={18} />
          </SearchIcon>
          <SearchInput type="text" placeholder="Search for products..." />
        </SearchContainer>

        <NavActions>
          <NavLink to="/wishlist">
            <Heart size={24} />
            {wishlistCount > 0 && <Badge>{wishlistCount}</Badge>}
          </NavLink>

          <NavLink to="/create-shop">
            <Store size={24} />
          </NavLink>

          <NavLink to="/profile">
            <User size={24} />
          </NavLink>

          <NavLink to="/cart">
            <ShoppingCart size={24} />
            {cartItemsCount > 0 && <Badge>{cartItemsCount}</Badge>}
          </NavLink>
        </NavActions>
      </NavContainer>

      <CategoriesMenu isOpen={isMenuOpen}>
        <CloseButton onClick={() => setIsMenuOpen(false)}>
          <X size={24} />
        </CloseButton>

        <h2>Categories</h2>
        <CategoryList>
          <CategoryItem>
            <Link to="/category/electronics">Electronics</Link>
          </CategoryItem>
          <CategoryItem>
            <Link to="/category/fashion">Fashion</Link>
          </CategoryItem>
          <CategoryItem>
            <Link to="/category/home">Home & Living</Link>
          </CategoryItem>
          <CategoryItem>
            <Link to="/category/books">Books</Link>
          </CategoryItem>
          <CategoryItem>
            <Link to="/category/sports">Sports & Outdoors</Link>
          </CategoryItem>
          <CategoryItem>
            <Link to="/category/beauty">Beauty & Health</Link>
          </CategoryItem>
        </CategoryList>
      </CategoriesMenu>
    </Nav>
  );
}
