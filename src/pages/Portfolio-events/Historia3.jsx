import './Historia3.css';

export const History3 = () => {
  return (
    <div className="content-history3">

      <section className="hero-history3">
        <img
          src="/imgs/banner-party.jpg"
          alt="Eventos Party"
        />
      </section>

      <section className="info-history3">

        <h1>Kanut</h1>

        <div className="badge-history3">
          Eventos - Party
        </div>

        <p>
          La juventud es color, movimiento y emoción sin filtros.
          Es celebrar la vida con intensidad, crear recuerdos que algún día
          arrancarán una sonrisa nostálgica y compartir momentos que fortalecen
          amistades para siempre.
        </p>

      </section>

      <section className="gallery-history3">

        <div className="gallery-wrapper">

          <div className="gallery-grid">

            <div className="gallery-item">
              <img src="/party/party1.jpg" alt="" />
            </div>

            <div className="gallery-item">
              <img src="/party/party2.jpg" alt="" />
            </div>

            <div className="gallery-item">
              <img src="/party/party3.jpg" alt="" />
            </div>

            <div className="gallery-item">
              <img src="/party/party4.jpg" alt="" />
            </div>

            <div className="gallery-item">
              <img src="/party/party5.jpg" alt="" />
            </div>

            <div className="gallery-item">
              <img src="/party/party6.jpg" alt="" />
            </div>

            <div className="gallery-item">
              <img src="/party/party7.jpg" alt="" />
            </div>

            <div className="gallery-item">
              <img src="/party/party8.jpg" alt="" />
            </div>

          </div>

          <div className="gallery-fade"></div>

        </div>

        <button className="btn-gallery">
          VER MÁS
        </button>

      </section>

    </div>
  );
};