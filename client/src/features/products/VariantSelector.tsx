import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: 600;
  color: #1a1a1a;
`;

const Options = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const VariantButton = styled.button<{ $active?: boolean }>`
  padding: 0.5rem 1rem;

  border: 2px solid
    ${(props) => (props.$active ? "var(--color-accent)" : "#e1e1e1")};
  border-radius: 6px;

  background: ${(props) => (props.$active ? "#f5f7f9" : "white")};
  color: ${(props) => (props.$active ? "var(--color-accent)" : "#1a1a1a")};
  transition: all 0.2s;

  &:hover {
    border-color: var(--color-accent);
  }
`;

interface VariantSelectorProps {
  sizes: string[];
}

export function VariantSelector({ sizes }: VariantSelectorProps) {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  return (
    <Container>
      <Label>Size</Label>
      <Options>
        {sizes.map((size) => (
          <VariantButton
            key={size}
            $active={size === selectedSize}
            onClick={() => setSelectedSize(size)}
          >
            {size}
          </VariantButton>
        ))}
      </Options>
    </Container>
  );
}
