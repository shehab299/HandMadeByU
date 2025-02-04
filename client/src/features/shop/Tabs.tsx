import styled from "styled-components";

const Container = styled.div`
  border-bottom: 1px solid #e1e1e1;
  margin-top: 2rem;
`;

const List = styled.div`
  display: flex;
  gap: 2rem;
  padding: 0 2rem;
`;

const Tab = styled.button<{ $active?: boolean }>`
  padding: 1rem 0;
  color: ${(props) => (props.$active ? "#1a1a1a" : "#666")};
  font-weight: ${(props) => (props.$active ? "600" : "400")};
  background: none;
  border-bottom: 2px solid
    ${(props) => (props.$active ? "var(--color-accent)" : "transparent")};
  transition: all 0.2s;

  &:hover {
    color: #1a1a1a;
  }
`;

function Tabs() {
  return (
    <Container>
      <List>
        <Tab $active>Products</Tab>
        <Tab>About</Tab>
        <Tab>Reviews</Tab>
      </List>
    </Container>
  );
}

export default Tabs;
