import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 800;
  color: white;

  border: none;
  border-radius: 5px;

  padding: 1rem 3rem;

  background-size: 200% auto;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);

  background-image: linear-gradient(
    to right,
    #895cf2 0%,
    var(--themecolor-secondary) 50%,
    #895cf2 100%
  );
  transition: 0.5s;

  &:hover {
    background-position: right center;
  }

  &:disabled {
    pointer-events: none;
  }
`;

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

function Button(props: Props) {
  return <StyledButton {...props}>{props.children}</StyledButton>;
}

export default Button;
