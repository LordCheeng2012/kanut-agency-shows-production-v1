import { useEffect, useRef, useState } from "react";
import { utils } from "@utils/utils";
import styles from "./modal.module.css";
const { isvalid_ref_element } = utils();

function Modal({ 
  children=null, 
  contentModal = null,
  setModalState = {
    handle:false,
    setHandle: undefined
  } }) {

  const refModal = useRef(null);
  const refContentModal = useRef(null);
  const {handle,setHandle} = setModalState; 
  const [show, setShow] = useState(false);
  const OpenModal = () => {
    if (!isvalid_ref_element(refModal) || !isvalid_ref_element(refContentModal))
      return;
    const modal = refModal.current;
    const contentModal = refContentModal.current;
    if (show) {
      modal.classList.toggle(`${styles["modal"]}`);
      contentModal.classList.toggle(`${styles["modal-content"]}`);
      return ;
    }
    modal.classList.remove(`${styles["modal"]}`);
    contentModal.classList.remove(`${styles["modal-content"]}`);
    return ;
  };

  function handleOpen(event) {
    event?.stopPropagation();
    !handle  && setShow(true);
  }

  function handleClose(event) {
    event?.stopPropagation();
     setShow(false);
     setHandle(false);

  }

  function handleContentClick(event) {
    event?.stopPropagation();
  }
  useEffect(()=>{ if(handle) setShow(true)},[handle]);
  useEffect(() => { OpenModal();}, [show]);

  return  (
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
        {show && contentModal}
      </div>
    </div>
  ) ;
}

export default Modal;
