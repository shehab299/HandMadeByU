import styled from "styled-components";
import ProductsGrid from "@features/products/ProductsGrid";
import { shop } from "./data";
import Tabs from "./Tabs";
import Details from "./Details";
import { Plus } from "lucide-react";
import { useState } from "react";
import { AddProductForm } from "@features/products/AddProductForm";
import { useParams } from "react-router";
import Button from "@components/Button";
import Modal from "@components/Modal";
// import { DeleteConfirmationModal } from "@components/DeleteConfirmationModal";

// interface DeleteModalState {
//   isOpen: boolean;
//   type: 'product' | 'shop';
//   itemName: string;
//   itemId: string;
// }

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
  const { id } = useParams();
  const [isAddingProduct, setIsAddingProduct] = useState(false);
  // const [deleteModal, setDeleteModal] = useState<DeleteModalState>({
  //   isOpen: false,
  //   type: "product",
  //   itemName: "",
  //   itemId: "",
  // });

  // const handleConfirmDelete = async () => {
  //   try {
  //     if (deleteModal.type === "product") {
  //       // Call API to delete product
  //       console.log(`Deleting product ${deleteModal.itemId}`);
  //       // Refresh products list after successful deletion
  //     } else {
  //       // Call API to delete shop
  //       console.log(`Deleting shop ${deleteModal.itemId}`);
  //       // Redirect to home page after successful deletion
  //     }
  //   } catch (error) {
  //     console.error("Error deleting:", error);
  //   }
  // };

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

        <Button $position="floating" onClick={() => setIsAddingProduct(true)}>
          <Plus size={20} />
          Add Product
        </Button>

        {isAddingProduct && (
          <Modal>
            <AddProductForm
              shopId={id!}
              onSuccess={() => setIsAddingProduct(false)}
              onCancel={() => setIsAddingProduct(false)}
            />
          </Modal>
        )}
      </Container>
    </div>
  );
}

export default ShopProfile;
