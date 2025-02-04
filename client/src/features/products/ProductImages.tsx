import { useState } from "react";
import styled from "styled-components";
import { ArrowLeft, ArrowRight } from "lucide-react";

const ImageSection = styled.div`
  position: relative;
`;

const MainImage = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
  border-radius: 12px;
`;

const ThumbnailContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;

  &::-webkit-scrollbar {
    height: 4px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
  }
`;

const Thumbnail = styled.img<{ $active?: boolean }>`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
  border: 2px solid ${(props) => (props.$active ? "#4a90e2" : "transparent")};
  transition: all 0.2s;

  &:hover {
    border-color: #4a90e2;
  }
`;

const ImageNav = styled.button`
  position: absolute;
  top: 50%;
  width: 40px;
  height: 40px;
  transform: translateY(-50%);
  
  border-radius: 50%;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.2s;

  &:hover {
    background: #f5f7f9;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &.prev {
    left: 1rem;
  }

  &.next {
    right: 1rem;
  }
`;

interface ProductImagesProps {
  images: string[];
}

function ProductImages({ images }: ProductImagesProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <ImageSection>
      <MainImage src={images[selectedImage]} alt="Product" />
      <ImageNav
        className="prev"
        onClick={() => setSelectedImage((prev) => Math.max(0, prev - 1))}
        disabled={selectedImage === 0}
      >
        <ArrowLeft size={20} />
      </ImageNav>
      <ImageNav
        className="next"
        onClick={() =>
          setSelectedImage((prev) => Math.min(images.length - 1, prev + 1))
        }
        disabled={selectedImage === images.length - 1}
      >
        <ArrowRight size={20} />
      </ImageNav>
      <ThumbnailContainer>
        {images.map((image, index) => (
          <Thumbnail
            key={index}
            src={image}
            alt={`Product ${index + 1}`}
            $active={index === selectedImage}
            onClick={() => setSelectedImage(index)}
          />
        ))}
      </ThumbnailContainer>
    </ImageSection>
  );
}

export default ProductImages;
