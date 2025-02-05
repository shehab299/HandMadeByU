import styled from "styled-components";
import Button from "./Button";
import { AlertTriangle } from "lucide-react";
import InputField from "./InputField";
import { useState } from "react";

const StyledConfirmDelete = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  width: 100%;
  max-width: 500px;
  position: relative;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  color: #1a1a1a;
  margin: 0;
`;

interface DeleteConfirmationModalProps {
  resourceName: string;
  onClose?: () => void;
  onConfirm?: () => void;
  disabled: boolean;
  itemName: string;
  warningMessage: string;
}

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const Description = styled.p`
  color: #666;
  margin: 0 0 1.5rem;
  line-height: 1.6;
`;

const WarningIcon = styled.div`
  color: var(--color-warning);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: #fff5f5;
  border-radius: 50%;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;

  & button {
    width: 100%;
  }
`;

function ConfirmDelete({
  itemName,
  resourceName,
  onConfirm,
  disabled,
  onClose,
  warningMessage,
}: DeleteConfirmationModalProps) {
  const [confirmationText, setConfirmationText] = useState("");

  const isConfirmationValid = confirmationText === itemName;

  const handleConfirm = () => {
    if (isConfirmationValid) {
      onConfirm?.();
      onClose?.();
    }
  };

  return (
    <StyledConfirmDelete>
      <ModalHeader>
        <WarningIcon>
          <AlertTriangle size={24} />
        </WarningIcon>
        <Title>Delete {resourceName}</Title>
      </ModalHeader>
      <p>
        Are you sure you want to delete this {resourceName} permanently? This
        action cannot be undone. {warningMessage}
      </p>

      <Description>
        Please type <strong>{itemName}</strong> to confirm deletion:
      </Description>

      <InputField
        id="warning"
        type="text"
        value={confirmationText}
        onChange={(e) => setConfirmationText(e.target.value)}
        placeholder={`Type ${itemName} to confirm`}
      />

      <ButtonGroup>
        <Button
          $variety="secondary"
          onClick={handleConfirm}
          disabled={disabled}
        >
          Cancel
        </Button>
        <Button
          $variety="danger"
          onClick={onConfirm}
          disabled={disabled || !isConfirmationValid}
        >
          Delete {resourceName}
        </Button>
      </ButtonGroup>
    </StyledConfirmDelete>
  );
}

export default ConfirmDelete;
