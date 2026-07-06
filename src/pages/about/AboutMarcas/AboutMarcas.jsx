import './AboutMarcas.css'
import { useState } from 'react'
import img1 from '../../../assets/imgs/marcas/img1.png'
import img2 from '../../../assets/imgs/marcas/img2.png'
import img3 from '../../../assets/imgs/marcas/img3.jpg'
// import img4 from '../../../assets/imgs/marcas/img2.jpg'
// import img5 from '../../../assets/imgs/marcas/img2.jpg'
// import img6 from '../../../assets/imgs/marcas/img2.jpg'
// import img7 from '../../../assets/imgs/marcas/img2.jpg'
// import img8 from '../../../assets/imgs/marcas/img2.jpg'


export const AboutMarcas = () => {

    const images = [
        img1,
        img2,
        img3,
        // img4,
        // img5,
        // img6,
        // img7,
        // img8
     ]

    const [current, setCurrent] = useState(0)
    const [galleryOpen, setGalleryOpen] = useState(false)

    const openGallery = (index) => {
        setCurrent(index)
        setGalleryOpen(true)
    }

    const closeGallery = () => {
        setGalleryOpen(false)
    }

    const nextImage = () => {
        setCurrent((prev) =>
            prev === images.length - 1 ? 0 : prev + 1
        )
    }

    const prevImage = () => {
        setCurrent((prev) =>
            prev === 0 ? images.length - 1 : prev - 1
        )
    }

  return (
    
    <div className='content-marcas'>

        <section className='empty-space'>
        </section>

        <section className='types-services-marcas'>

            <div className="c-m-item-service">
                <div className='cmi-service boda-s'></div>
            </div>

            <div className="c-m-item-service">
                <div className='cmi-service shows-s'></div>
            </div>

            <div className="c-m-item-service">
                <div className='cmi-service party-s'></div>
            </div>

        </section>

        <section className='description-service'>

            <p className='ds-details kanut-description-altern'>
                Creamos experiencias auténticas que reflejan elegancia,
                romanticismo y celebración, cuidando cada detalle e iluminación
                para transformar momentos especiales en recuerdos inolvidables.
            </p>

        </section>

 <section className='gallery-images-grid'>

    <div className="item-grid-galery spreat-rows">

        <div className="spreat-c item-r">

            <div onClick={() => openGallery(0)}></div>

            <div onClick={() => openGallery(1)}></div>

        </div>

        <div
            className="item-r only-back"
            onClick={() => openGallery(2)}
        ></div>

    </div>

    <div className="item-grid-galery spreat-columns">

        <div
            className="item-c only-back"
            onClick={() => openGallery(3)}
        ></div>

        <div className="item-c spreat-r">

            <div onClick={() => openGallery(4)}></div>

            <div onClick={() => openGallery(5)}></div>

        </div>

    </div>

    <div className="item-grid-galery spreat-rows">

        <div
            className="item-r only-back"
            onClick={() => openGallery(6)}
        ></div>

        <div className="item-r spreat-c">

            <div onClick={() => openGallery(7)}></div>

            <div onClick={() => openGallery(8)}></div>

        </div>

    </div>

    <div className="item-grid-galery spreat-rows">

        <div
            className="item-r only-back"
            onClick={() => openGallery(9)}
        ></div>

        <div
            className="item-r only-back"
            onClick={() => openGallery(10)}
        ></div>

    </div>

    {galleryOpen && (

        <div className="gallery-overlay">

            <div className="gallery-popup">

                <button
                    className="close-gallery"
                    onClick={closeGallery}
                >
                    ✕
                </button>

                <button
                    className="gallery-arrow left"
                    onClick={prevImage}
                >
                    ‹
                </button>

                <img
                    src={images[current]}
                    alt=""
                    className="main-gallery-image"
                />

                <button
                    className="gallery-arrow right"
                    onClick={nextImage}
                >
                    ›
                </button>
            </div>
        </div>
    )}
</section>
    </div>
  )
}