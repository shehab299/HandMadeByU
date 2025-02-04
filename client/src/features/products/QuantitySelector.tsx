import styled from "styled-components";

const QuantitySelectorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Button = styled.button`
  width: 36px;
  height: 36px;
  border: 2px solid #e1e1e1;
  border-radius: 6px;
  background: white;
  color: #1a1a1a;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;

  &:hover {
    border-color: var(--color-accent);
    color: var(--color-accent);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Input = styled.input`
  width: 60px;
  height: 36px;
  border: 2px solid #e1e1e1;
  border-radius: 6px;
  text-align: center;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: var(--color-accent);
  }
`;

interface QuantitySelectorProps {
  quantity: number;
  onQuantityChange: (value: number) => void;
}

const Label = styled.label`
  font-weight: 600;
  color: #1a1a1a;
`;

export function QuantitySelector({
  quantity,
  onQuantityChange,
}: QuantitySelectorProps) {
  return (
    <QuantitySelectorContainer>
      <Label>Quantity</Label>
      <Button
        onClick={() => onQuantityChange(quantity - 1)}
        disabled={quantity <= 1}
      >
        -
      </Button>
      <Input
        type="number"
        min="1"
        max="99"
        value={quantity}
        onChange={(e) => onQuantityChange(parseInt(e.target.value) || 1)}
      />
      <Button
        onClick={() => onQuantityChange(quantity + 1)}
        disabled={quantity >= 99}
      >
        +
      </Button>
    </QuantitySelectorContainer>
  );
}
