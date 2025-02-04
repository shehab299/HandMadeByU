import { Link } from "react-router-dom";
import styled from "styled-components";

import { LOGO, PROJECT_NAME } from "constants";

const BrandContainer = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  color: #1a1a1a;
  font-size: 1.5rem;
  font-weight: 700;
  min-width: max-content;
`;

export function Brand() {
  return (
    <BrandContainer to="/">
      {LOGO}
      {PROJECT_NAME}
    </BrandContainer>
  );
}
