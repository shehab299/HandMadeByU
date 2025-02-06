import ConfirmDelete from "@components/ConfirmDelete";
import Modal from "@components/Modal";
import { Product } from "@types";
import { Trash2 } from "lucide-react";

import styled from "styled-components";
import { useDeleteProduct } from "./hooks/useDeleteProduct";
import { useNavigate, useParams } from "react-router";

const Container = styled.div`
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  width: 100%;
  height: 100%;

  transition: transform 0.2s;
  &:hover {
    transform: translateY(-4px);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;

  ${Container}:hover & {
    opacity: 1;
  }
`;

const ProductName = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
  color: white;
`;

const ProductPrice = styled.p`
  font-size: 1.125rem;
  font-weight: 700;
  margin: 0.5rem 0;
  color: white;
`;

const DeleteIcon = styled.button`
  position: absolute;

  background: none;
  padding: 0.5rem 0.5rem;
  border-radius: 5px;
  bottom: 1rem;
  right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;

  & svg {
    width: 1.5rem;
    height: 1.5rem;
    color: var(--color-warning);
  }
`;
function ProductCard({ id, image, name, price }: Product) {
  const { id: shopId } = useParams();
  const navigate = useNavigate();
  const { deleteProduct, isPending } = useDeleteProduct();

  return (
    <Container
      onClick={() => {
        navigate(`/shop/${shopId}/product/${id}`);
      }}
      key={id}
    >
      <ProductImage src={image} alt={name} />
      <Overlay>
        <ProductName>{name}</ProductName>
        <ProductPrice>${price}</ProductPrice>
        <Modal>
          <Modal.Open opens="deleteProduct">
            <DeleteIcon>
              <Trash2 size={16} />
            </DeleteIcon>
          </Modal.Open>

          <Modal.Window name="deleteProduct">
            <ConfirmDelete
              itemName={name}
              warningMessage="All products, orders, and shop data will be permanently deleted."
              resourceName="product"
              disabled={isPending}
              onConfirm={() => {
                deleteProduct(id);
              }}
            />
          </Modal.Window>
        </Modal>
      </Overlay>
    </Container>
  );
}

export default ProductCard;
