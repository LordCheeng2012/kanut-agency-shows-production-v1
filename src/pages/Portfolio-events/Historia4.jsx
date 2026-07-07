import './Historia4.css';

export const History4 = () => {
  return (
    <div className="content-history4">

      <section className="hero-history4">
        <img
          src="/images/history4/banner.jpg"
          alt="Eventos Especiales"
        />
      </section>    

      <section className="info-history4">

        <h1>Kanut</h1>

        <div className="badge-history4">
          Eventos Especiales
        </div>

        <p>
          Hay momentos que merecen ser recordados para siempre.
          Celebraciones que reúnen personas, crean emociones y dejan
          recuerdos imborrables. Nuestro objetivo es capturar cada
          instante con autenticidad para que puedas revivirlo una y
          otra vez.
        </p>

      </section>

      <section className="gallery-history4">

        <div className="gallery-grid">

          <div className="gallery-item">
            <img src="/events/event1.jpg" alt="" />
          </div>

          <div className="gallery-item">
            <img src="/events/event2.jpg" alt="" />
          </div>

          <div className="gallery-item">
            <img src="/events/event3.jpg" alt="" />
          </div>

          <div className="gallery-item">
            <img src="/events/event4.jpg" alt="" />
          </div>

          <div className="gallery-item">
            <img src="/events/event5.jpg" alt="" />
          </div>

          <div className="gallery-item">
            <img src="/events/event6.jpg" alt="" />
          </div>

          <div className="gallery-item">
            <img src="/events/event7.jpg" alt="" />
          </div>

          <div className="gallery-item">
            <img src="/events/event8.jpg" alt="" />
          </div>

        </div>

        <div className="gallery-fade"></div>

        <button className="btn-gallery">
          VER MÁS
        </button>

      </section>

    </div>
  );
};