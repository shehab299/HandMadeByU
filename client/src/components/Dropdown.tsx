import styled from "styled-components";
import { Plus } from "lucide-react";
import Button from "@components/Button";
import { useClickOutside } from "@features/shop/hooks/useClickOutside";

const DropdownContainer = styled.div<{ $isOpen: boolean }>`
  display: ${(props) => (props.$isOpen ? "block" : "none")};
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 1000;

  width: 320px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);

  padding: 1rem;
  margin-top: 0.5rem;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #e1e1e1;
  margin: 0.5rem 0;
`;

interface DropdownProps {
  $isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  showDivider?: boolean;
  showButton?: boolean;
  buttonText?: string;
  buttonIcon?: React.ReactNode;
  buttonOnClick?: () => void;
  buttonTo?: string;
}

function Dropdown({
  $isOpen,
  onClose,
  children,
  showDivider = false,
  showButton = false,
  buttonText = "Create New",
  buttonIcon = <Plus size={18} />,
  buttonOnClick,
  buttonTo,
}: DropdownProps) {
  const dropdownRef = useClickOutside<HTMLDivElement>(false, onClose);

  return (
    <DropdownContainer $isOpen={$isOpen} ref={dropdownRef}>
      {children}

      {showDivider && <Divider />}

      {showButton && (
        <Button
          $variety="primary"
          $size="small"
          onClick={buttonOnClick}
          to={buttonTo}
        >
          {buttonIcon}
          {buttonText}
        </Button>
      )}
    </DropdownContainer>
  );
}

export default Dropdown;
