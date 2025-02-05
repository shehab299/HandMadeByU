import { useAuth } from "context/AuthContext";
import { User } from "lucide-react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-bottom: 1px solid #e1e1e1;
`;

const Avatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #f5f7f9;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
`;

const Details = styled.div`
  flex: 1;
`;

const Name = styled.h3`
  font-size: 0.875rem;
  font-weight: 600;
  margin: 0;
  color: #1a1a1a;
`;

const Email = styled.p`
  font-size: 0.75rem;
  color: #666;
  margin: 0.25rem 0 0;
`;

function UserInfo() {
  const { user, isPending } = useAuth();
  if (isPending) return;

  return (
    <Container>
      <Avatar>
        <User size={24} />
      </Avatar>
      <Details>
        <Name>
          {user?.firstName} {user?.lastName}
        </Name>
        <Email>{user?.email}</Email>
      </Details>
    </Container>
  );
}

export default UserInfo;
