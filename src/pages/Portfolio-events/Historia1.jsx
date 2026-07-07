import './Historia1.css';
import bannerBoda1 from '../../assets/imgs/banner/bannerBoda1.png';

export const History1 = () => {
  return (
    <div className="content-history1">
      <section className="hero-history1">
        <img
          src={bannerBoda1}
          alt="Boda Kanut"
        />
      </section>

      <section className="info-history1">

        <p>
          Detrás de cada boda hay sueños compartidos, promesas sinceras y
          emociones que no caben en palabras. Nos mueve la belleza de lo
          auténtico, la emoción de lo verdadero y la fuerza de un amor que
          decide celebrarse.
        </p>

      </section>

      <section className="gallery-history1">

        <div className="gallery-wrapper-his1">

          <div className="gallery-grid-his1">

            <div className="gallery-item-his1">
              <img src="/bodas/boda1.jpg" alt="" />
            </div>

            <div className="gallery-item-his1">
              <img src="/bodas/boda2.jpg" alt="" />
            </div>

            <div className="gallery-item-his1">
              <img src="/bodas/boda3.jpg" alt="" />
            </div>

            <div className="gallery-item-his1">
              <img src="/bodas/boda4.jpg" alt="" />
            </div>

            <div className="gallery-item-his1">
              <img src="/bodas/boda5.jpg" alt="" />
            </div>

            <div className="gallery-item-his1">
              <img src="/bodas/boda6.jpg" alt="" />
            </div>

            <div className="gallery-item-his1">
              <img src="/bodas/boda7.jpg" alt="" />
            </div>

            <div className="gallery-item-his1">
              <img src="/bodas/boda8.jpg" alt="" />
            </div>

            <div className="gallery-item-his1">
              <img src="/bodas/boda9.jpg" alt="" />
            </div>

            <div className="gallery-item-his1">
              <img src="/bodas/boda10.jpg" alt="" />
            </div>

            <div className="gallery-item-his1">
              <img src="/bodas/boda11.jpg" alt="" />
            </div>

            <div className="gallery-item-his1">
              <img src="/bodas/boda12.jpg" alt="" />
            </div>

            <div className="gallery-item-his1">
              <img src="/bodas/boda13.jpg" alt="" />
            </div>

            <div className="gallery-item-his1">
              <img src="/bodas/boda14.jpg" alt="" />
            </div>

            <div className="gallery-item-his1">
              <img src="/bodas/boda15.jpg" alt="" />
            </div>

            <div className="gallery-item-his1">
              <img src="/bodas/boda16.jpg" alt="" />
            </div>

            <div className="gallery-item-his1">
              <img src="/bodas/boda17.jpg" alt="" />
            </div>

            <div className="gallery-item-his1">
              <img src="/bodas/boda18.jpg" alt="" />
            </div>

            <div className="gallery-item-his1">
              <img src="/bodas/boda19.jpg" alt="" />
            </div>

            <div className="gallery-item-his1">
              <img src="/bodas/boda20.jpg" alt="" />
            </div>

          </div>

          <div className="gallery-fade-his1"></div>

        </div>

        <button
          className="btn-gallery-his1"
          onClick={(e) => {
            const wrapper = document.querySelector('.gallery-wrapper-his1');
            const fade = document.querySelector('.gallery-fade-his1');
          
            wrapper.classList.toggle('expanded');
          
            if (wrapper.classList.contains('expanded')) {
              fade.style.display = 'none';
              e.target.textContent = 'VER MENOS';
            } else {
              fade.style.display = 'block';
              e.target.textContent = 'VER MÁS';
              wrapper.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
         }}
        >
          VER MÁS
      </button>

      </section>

    </div>
  );
};