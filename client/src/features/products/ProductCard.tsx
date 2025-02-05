import ConfirmDelete from "@components/ConfirmDelete";
import Modal from "@components/Modall";
import { Product } from "@types";
import { Star, Trash2 } from "lucide-react";

import styled from "styled-components";
import { useDeleteProduct } from "./hooks/useDeleteProduct";

const Container = styled.div`
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  position: relative;

  &:hover {
    transform: translateY(-4px);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProductInfo = styled.div`
  padding: 1rem;
`;

const ProductName = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
  color: #1a1a1a;
`;

const ProductPrice = styled.p`
  font-size: 1.125rem;
  font-weight: 700;
  color: #4a90e2;
  margin: 0.5rem 0;
`;

const ProductRating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: #666;
  font-size: 0.875rem;
`;

const DeleteIcon = styled.button`
  position: absolute;

  background: var(--color-warning-shade);

  padding: 0.5rem 0.5rem;
  border-radius: 5px;

  bottom: 1rem;
  right: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    color: var(--color-warning);
  }
`;

function ProductCard({ id, image, name, price }: Product) {
  const { deleteProduct, isPending } = useDeleteProduct();

  return (
    <Container
      // onClick={() => navigate(`/shop/${shopId}/product/${id}`)}
      key={id}
    >
      <ProductImage src={image} alt={name} />
      <ProductInfo>
        <ProductName>{name}</ProductName>
        <ProductPrice>${price}</ProductPrice>
        <ProductRating>
          <Star size={16} fill="#ffd700" />4
        </ProductRating>

        <Modal>
          <Modal.Open opens="deleteProduct">
            <DeleteIcon>
              <Trash2 size={16} />
            </DeleteIcon>
          </Modal.Open>

          <Modal.Window name="deleteProduct">
            <ConfirmDelete
              itemName={name}
              warningMessage="All products, orders, and shop data will be permanently
              deleted."
              resourceName="product"
              disabled={isPending}
              onConfirm={() => {
                deleteProduct(id);
              }}
            />
          </Modal.Window>
        </Modal>
      </ProductInfo>
    </Container>
  );
}

export default ProductCard;
