import styled from "styled-components";
import { Share2, MessageCircle } from "lucide-react";

import Button from "@components/Button";

const Conatainer = styled.div`
  display: flex;
  gap: 1rem;
`;

function ActionButtons() {
  return (
    <Conatainer>
      <Button $variety="secondary" $size="small">
        <Share2 size={18} />
        Share
      </Button>
      <Button $variety="secondary" $size="small">
        <MessageCircle size={18} />
        Message
      </Button>
      <Button $variety="primary" $size="small">
        Follow Shop
      </Button>
    </Conatainer>
  );
}

export default ActionButtons;
