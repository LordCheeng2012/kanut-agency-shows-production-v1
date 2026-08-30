import {
  Carousel,
  GaleryItem,
  GridContainer,
  Modal,
  Container,
} from "@components";
import styles from "./galery.module.css";
import { useServiceDetails } from "@absolute/hooks";
import { useState } from "react";

function Galery() {
  const { gallery, ListImages } = useServiceDetails();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const getCurrentIndex = (Currentpath) => {
    const findIndex = ListImages.findIndex(({ url }) => url === Currentpath);
    return findIndex || 0;
  };
  const openModal = (currentPath) => {
    setOpen(true);
    setCurrentIndex(getCurrentIndex(currentPath));
  };
  const contentModal = (
    <Carousel
      automatic={false}
      items={ListImages.map(({ url, alt }) => (
        <Container size="ex-lg">
          <GaleryItem path={url} alt={alt} display="countain" />
        </Container>
      ))}
      startIn={currentIndex}
    />
  );
  return (
    <>
      <div className={styles["gallery-container"]}>
        {gallery.map((model) => {
          const items = model["items"];
          const nameModel = model["model-name"];
          return (
            <GridContainer modelName={nameModel}>
              {items.map((item) => {
                if (Array.isArray(item))
                  return (
                    <GridContainer modelName="apilate">
                      {item.map(({ url, alt }) => (
                        <GaleryItem
                          onClick={() => openModal(url)}
                          path={url}
                          alt={alt}
                          display="cover"
                        />
                      ))}
                    </GridContainer>
                  );
                const { url, alt } = item;
                return (
                  <GaleryItem
                    onClick={() => openModal(url)}
                    path={url}
                    alt={alt}
                    display="cover"
                  />
                );
              })}
            </GridContainer>
          );
        })}
      </div>
      <Modal
        handleOpenModalState={{handle:open,setHandle:setOpen}}
        contentModal={contentModal}
      />
    </>
  );
}

export default Galery;
