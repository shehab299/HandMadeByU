import { Link } from "react-router-dom";
import styled from "styled-components";
import { X } from "lucide-react";

const CategoriesMenuContainer = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 300px;
  background: white;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  transform: translateX(${(props) => (props.$isOpen ? "0" : "-100%")});
  transition: transform 0.3s ease-in-out;
  z-index: 1001;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  padding: 0.5rem;
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

interface CategoriesMenuProps {
  $isOpen: boolean;
  onClose: () => void;
}

export function CategoriesMenu({ $isOpen, onClose }: CategoriesMenuProps) {
  return (
    <CategoriesMenuContainer $isOpen={$isOpen}>
      <CloseButton onClick={onClose}>
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
    </CategoriesMenuContainer>
  );
}
