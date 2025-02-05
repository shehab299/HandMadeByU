import { ButtonHTMLAttributes } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledButton = styled.button<{
  $variety?: string;
  $size?: string;
  $position?: string;
  as?: React.ElementType;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  color: white;
  border-radius: 5px;
  font-weight: 600;

  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);

  text-decoration: none;

  ${({ $variety }) => {
    if ($variety === "primary") {
      return css`
        background: var(--color-accent);

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

    if ($variety === "gradient") {
      return css`
        background-size: 200% auto;

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
    }
  }}

  ${({ $position }) => {
    if ($position === "floating") {
      return css`
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        z-index: 100;

        width: auto;

        padding: 1rem 2rem;
      `;
    }
  }}

  ${({ $size }) => {
    if ($size === "small") {
      return css`
        padding: 1rem;
        border-radius: 8px;
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
        padding: 1rem 3rem;
        font-size: 1.25rem;
      `;
    }
  }}
`;

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  $variety?: "primary" | "secondary" | "gradient";
  $size?: "small" | "medium" | "large";
  $position?: "floating" | "normal";
  to?: string;
};

function Button({
  $variety = "primary",
  $size = "medium",
  $position = "normal",
  to,
  children,
  ...props
}: Props) {
  if (to) {
    return (
      <StyledButton
        $position={$position}
        $size={$size}
        $variety={$variety}
        as={Link}
        to={to}
      >
        {children}
      </StyledButton>
    );
  }

  return (
    <StyledButton
      $position={$position}
      $size={$size}
      $variety={$variety}
      {...props}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
