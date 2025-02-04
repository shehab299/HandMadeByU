import { Link } from "react-router";
import styled from "styled-components";

const NavLinkContainer = styled.button`
  color: #1a1a1a;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  position: relative;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;

  &:hover {
    color: var(--color-accent);
  }
`;

const Badge = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background: var(--color-badge);
  color: white;
  font-size: 0.75rem;
  padding: 0.125rem 0.375rem;
  border-radius: 9999px;
  min-width: 18px;
  text-align: center;
`;

interface NavLinkProps {
  to: string;
  icon: React.ReactNode;
  badgeCount?: number;
  onClick?: () => void;
}

export function NavLink({ to, icon, badgeCount, onClick }: NavLinkProps) {
  return (
    <NavLinkContainer onClick={onClick} as={Link} to={to}>
      {icon}
      {badgeCount && badgeCount > 0 && <Badge>{badgeCount}</Badge>}
    </NavLinkContainer>
  );
}
