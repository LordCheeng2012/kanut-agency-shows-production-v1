import './Historia2.css';
import bannerQuince from '../../assets/imgs/banner/bannerQuince.png';

export const History2 = () => {
  return (
    <div className="content-history2">
      <section className="hero-history1">
              <img
                src={bannerQuince}
                alt="Boda Kanut"
              />
      </section>

      <section className="info-history2">

        <p>
          Sabemos que detrás de cada celebración hay algo más profundo:
          el deseo de regalarle a tu hijo un momento que nunca olvide.
          Un día lleno de emoción, juegos, sorpresas y sonrisas
          verdaderas que quedarán grabadas para siempre.
        </p>

      </section>

      <section className="gallery-history2">

        <div className="gallery-wrapper-his2">

          <div className="gallery-grid-his2">

            <div className="gallery-item-his2">
              <img src="/shows/show1.jpg" alt="" />
            </div>

            <div className="gallery-item-his2">
              <img src="/shows/show2.jpg" alt="" />
            </div>

            <div className="gallery-item-his2">
              <img src="/shows/show3.jpg" alt="" />
            </div>

            <div className="gallery-item-his2">
              <img src="/shows/show4.jpg" alt="" />
            </div>

            <div className="gallery-item-his2">
              <img src="/shows/show5.jpg" alt="" />
            </div>

            <div className="gallery-item-his2">
              <img src="/shows/show6.jpg" alt="" />
            </div>

            <div className="gallery-item-his2">
              <img src="/shows/show7.jpg" alt="" />
            </div>

            <div className="gallery-item-his2">
              <img src="/shows/show8.jpg" alt="" />
            </div>
            <div className="gallery-item-his2">
              <img src="/shows/show9.jpg" alt="" />
            </div>
            <div className="gallery-item-his2">
              <img src="/shows/show10.jpg" alt="" />
            </div>
            <div className="gallery-item-his2">
              <img src="/shows/show11.jpg" alt="" />
            </div>
            <div className="gallery-item-his2">
              <img src="/shows/show12.jpg" alt="" />
            </div>
            <div className="gallery-item-his2">
              <img src="/shows/show13.jpg" alt="" />
            </div>
            <div className="gallery-item-his2">
              <img src="/shows/show14.jpg" alt="" />
            </div>
            <div className="gallery-item-his2">
              <img src="/shows/show15.jpg" alt="" />
            </div><div className="gallery-item-his2">
              <img src="/shows/show16.jpg" alt="" />
            </div>

            <div className="gallery-item-his2">
              <img src="/shows/show17.jpg" alt="" />
            </div>
            <div className="gallery-item-his2">
              <img src="/shows/show18.jpg" alt="" />
            </div>
            <div className="gallery-item-his2">
              <img src="/shows/show19.jpg" alt="" />
            </div>
            <div className="gallery-item-his2">
              <img src="/shows/show20.jpg" alt="" />
            </div>
          </div>

          <div className="gallery-fade-his2"></div>

        </div>

        <button
          className="btn-gallery-his2"
          onClick={(e) => {
            const wrapper = document.querySelector('.gallery-wrapper-his2');
            const fade = document.querySelector('.gallery-fade-his2');
          
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