import styled from "styled-components";
import { Search } from "lucide-react";

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
    border-color: var(--color-accent);
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
`;

export function SearchBar() {
  return (
    <SearchContainer>
      <SearchIcon>
        <Search size={18} />
      </SearchIcon>
      <SearchInput type="text" placeholder="Search for products..." />
    </SearchContainer>
  );
}
