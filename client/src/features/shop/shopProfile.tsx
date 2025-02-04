import styled from "styled-components";
import ProductsGrid from "@features/products/ProductsGrid";
import { shop } from "./data";
import Tabs from "./Tabs";
import Details from "./Details";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
`;

const Banner = styled.div`
  position: relative;
  width: 100%;
  height: 350px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const ShopInfo = styled.div`
  position: relative;
  padding: 0 2rem;
  margin-top: -80px;
`;

const LogoContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const Logo = styled.img`
  width: 168px;
  height: 168px;
  border-radius: 12px;
  border: 4px solid white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background: white;
  object-fit: cover;
`;

function ShopProfile() {
  return (
    <div>
      <Banner style={{ backgroundImage: `url(${shop.banner})` }} />
      <Container>
        <ShopInfo>
          <LogoContainer>
            <Logo src={shop.logo} alt={shop.name} />
          </LogoContainer>

          <Details />
          <Tabs />
          <ProductsGrid />
        </ShopInfo>
      </Container>
    </div>
  );
}

export default ShopProfile;
