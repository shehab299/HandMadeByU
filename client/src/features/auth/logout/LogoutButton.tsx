import { useNavigate } from "react-router";
import styled from "styled-components";
import toast from "react-hot-toast";
import { LogOut } from "lucide-react";
import { useQueryClient } from "@tanstack/react-query";

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  padding: 0.75rem 1rem;

  color: var(--color-error);
  background: none;

  width: 100%;

  text-align: left;
  font-size: 0.875rem;

  border-radius: 8px;

  transition: all 0.2s;

  &:hover {
    background: #fff5f5;
  }
`;

function LogoutButton() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  function handleLogout() {
    queryClient.removeQueries();
    queryClient.invalidateQueries();

    localStorage.clear();
    navigate("/login", { replace: true, state: { from: "logout" } });
    toast.success("Logged out successfully");
  }

  return (
    <Button onClick={handleLogout}>
      <LogOut size={18} />
      Log Out
    </Button>
  );
}

export default LogoutButton;
