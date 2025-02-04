import styled from "styled-components";
import { ShoppingCart, Heart, Share2 } from "lucide-react";

import Button from "@components/Button";

const Container = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

function ActionButtons() {
  return (
    <Container>
      <Button $size="small" $variety="primary">
        <ShoppingCart size={20} />
        Add to Cart
      </Button>
      <Button $size="small" $variety="secondary">
        <Heart size={20} />
        Save
      </Button>
      <Button $size="small" $variety="secondary">
        <Share2 size={20} />
        Share
      </Button>
    </Container>
  );
}

export default ActionButtons;
