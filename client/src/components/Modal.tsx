import { useClickOutside } from "@features/shop/hooks/useClickOutside";
import { X } from "lucide-react";
import {
  cloneElement,
  createContext,
  useContext,
  useState,
  ReactNode,
  ReactElement,
} from "react";
import { createPortal } from "react-dom";

import styled from "styled-components";

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;

  max-width: 600px;
  max-height: 90vh;
  overflow: auto;
  transform: translate(-50%, -50%);

  box-shadow: var(--shadow-lg);

  transition: all 0.5s;
`;

const Overlay = styled.div`
  border-radius: 12px;

  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100vh;

  background: rgba(0, 0, 0, 0.245);
  backdrop-filter: blur(4px);

  z-index: 1000;
  transition: all 0.5s;
`;

const Button = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;

  z-index: 1001;

  background: none;
  border: none;

  padding: 0.5rem;
  cursor: pointer;
  color: #666;
  transition: color 0.2s;

  &:hover {
    color: #1a1a1a;
  }
`;

interface ModalContextType {
  openName: string;
  open: (name: string) => void;
  close: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

interface ModalProps {
  children: ReactNode;
}

export default function Modal({ children }: ModalProps) {
  const [openName, setOpenName] = useState<string>("");
  const close = () => setOpenName("");
  const open = (name: string) => setOpenName(name);

  return (
    <ModalContext.Provider value={{ openName, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

interface WindowProps {
  children: ReactElement;
  name: string;
}

function Window({ children, name }: WindowProps) {
  const modalContext = useContext(ModalContext);

  if (!modalContext) return null;

  const { openName, close } = modalContext;
  const ref = useClickOutside(true, close);

  if (name !== openName) return null;

  return createPortal(
    <Overlay>
      <StyledModal ref={ref}>
        <Button onClick={close}>
          <X size={24} />
        </Button>
        <div>{cloneElement(children, { type: "modal", onClose: close })}</div>
      </StyledModal>
    </Overlay>,
    document.body
  );
}

interface OpenProps {
  children: ReactElement;
  opens: string;
}

function Open({ children, opens }: OpenProps) {
  const modalContext = useContext(ModalContext);

  if (!modalContext) return null;

  const { open } = modalContext;
  return cloneElement(children, { onClick: () => open(opens) });
}

Modal.Window = Window;
Modal.Open = Open;
