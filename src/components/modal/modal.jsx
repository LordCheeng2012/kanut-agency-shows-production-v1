import { useEffect, useRef, useState } from "react";
import { utils } from "@utils/utils";
import styles from "./modal.module.css";
const { isvalid_ref_element } = utils();

function Modal({ children }) {
  const refModal = useRef(null);
  const refContentModal = useRef(null);
  const [show, setShow] = useState(false);

  function handleOpen(event) {
    event?.stopPropagation();
    setShow(true);
  }

  function handleClose(event) {
    event?.stopPropagation();
    setShow(false);
  }

  function handleContentClick(event) {
    event?.stopPropagation();
  }

  useEffect(() => {
    if (!isvalid_ref_element(refModal) || !isvalid_ref_element(refContentModal))
      return;
    const modal = refModal.current;
    const contentModal = refContentModal.current;
    if (show) {
      modal.classList.toggle(`${styles["modal"]}`);
      contentModal.classList.toggle(`${styles["modal-content"]}`);
      return console.log(`modal is show`);
    }
    modal.classList.remove(`${styles["modal"]}`);
    contentModal.classList.remove(`${styles["modal-content"]}`);
    return console.log("close modal show");
  }, [show]);

  return (
    <div
      className={styles["close"]}
      onClick={show ? undefined : handleOpen}
      ref={refModal}
    >
      <div
        className={styles["close"]}
        onClick={show ? handleContentClick : undefined}
        ref={refContentModal}
      >
        {show ? (
          <button className={styles["close-buttom"]} onClick={handleClose}>
            X
          </button>
        ) : (
          <></>
        )}
        {children}
      </div>
    </div>
  );
}

export default Modal;
