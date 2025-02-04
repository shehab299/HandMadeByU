import { ButtonHTMLAttributes } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledButton = styled.button<{
  $variety?: string;
  $size?: string;
  as?: React.ElementType;
}>`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;

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

  text-decoration: none;

  ${({ $variety }) => {
    if ($variety === "primary") {
      return css`
        background: var(--color-accent);

        width: 100%;
        transition: background-color 0.2s;

        &:hover {
          background: var(--color-accent-hover);
        }

        &:disabled {
          background: #ccc;
          cursor: not-allowed;
        }
      `;
    }

    if ($variety === "secondary") {
      return css`
        background: var(--color-button-secondary);
        color: #1a1a1a;

        &:hover {
          background: var(--color-button-secondary-hover);
        }

        &:disabled {
          background: #ccc;
          cursor: not-allowed;
        }
      `;
    }
  }}

  ${({ $size }) => {
    if ($size === "small") {
      return css`
        padding: 1rem;
        border-radius: 8px;
        font-weight: 600;
        padding: 0.75rem 1.5rem;
        font-size: 0.875rem;
      `;
    }

    if ($size === "medium") {
      return css`
        padding: 1rem 2rem;
        font-size: 1rem;
      `;
    }

    if ($size === "large") {
      return css`
        padding: 1.5rem 3rem;
        font-size: 1.25rem;
      `;
    }
  }}
`;

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  $variety?: "primary" | "secondary";
  $size?: "small" | "medium" | "large";
  to?: string;
};

function Button({ $variety, $size = "medium", to, children, ...props }: Props) {
  if (to) {
    return (
      <StyledButton $size={$size} $variety={$variety} as={Link} to={to}>
        {children}
      </StyledButton>
    );
  }

  return (
    <StyledButton $size={$size} $variety={$variety} {...props}>
      {children}
    </StyledButton>
  );
}

export default Button;
