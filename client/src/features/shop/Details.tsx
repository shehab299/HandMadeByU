import styled from "styled-components";
import { MapPin, Clock, Star } from "lucide-react";

import { shop } from "./data";
import ActionButtons from "./ActionButtons";

const ShopDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 1rem;
`;

const ShopName = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin: 0;
  color: #1a1a1a;
`;

const ShopStats = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 0.5rem;
  color: #666;
  font-size: 0.875rem;
`;

const Stat = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

function Details() {
  return (
    <ShopDetails>
      <div>
        <ShopName>{shop.name}</ShopName>
        <ShopStats>
          <Stat>
            <MapPin size={16} />
            {shop.location}
          </Stat>
          <Stat>
            <Clock size={16} />
            Joined {shop.joinedDate}
          </Stat>
          <Stat>
            <Star size={16} />
            {shop.rating} ({shop.reviews} reviews)
          </Stat>
          <Stat>{shop.followers} followers</Stat>
        </ShopStats>
      </div>

      <ActionButtons />
    </ShopDetails>
  );
}

export default Details;
