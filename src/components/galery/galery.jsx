import {
  Carousel,
  GaleryItem,
  GridContainer,
  Modal,
  Container,
  Image
} from "@components";
import styles from "./galery.module.css";
import { useServices } from "@absolute/hooks";
import { useState } from "react";
import { utils } from "@utils/index";

function Galery({ gallery = null, ListImages = [] }) {
  const { isnull_undf } = utils();
  
  if (
    isnull_undf(gallery) ||
    isnull_undf(ListImages) ||
    ListImages.length == 0
  ) {
    const {galery} = useServices();
    gallery = galery.model;
    ListImages = galery.ListImages;
  }
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
      items={ListImages.map(({ url, alt },i) => (
        <Container size="auto" key={i} >
          <Image src={url} alt={alt} display="cover" className  ={styles["gallery-modal-container-image"]} />
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
        setModalState={{ handle: open, setHandle: setOpen }}
        contentModal={contentModal}
      />
    </>
  );
}

export default Galery;
