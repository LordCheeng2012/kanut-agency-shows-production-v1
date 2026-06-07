import "./bolsa.css";

const trabajos = [
  {
    id: 1,
    puesto: "Animador(a) de Shows Infantiles",
    requisitos: [
      "Contar con estudios secundarios completos.",
      "Experiencia previa en animaciones de shows infantiles.",
      "Persona dinámica, creativa y con vocación de servicio.",
      "Disponibilidad para trabajar fines de semana."
    ]
  },
  {
    id: 2,
    puesto: "Animador(a) de Shows Infantiles",
    requisitos: [
      "Contar con estudios secundarios completos.",
      "Experiencia previa en animaciones de shows infantiles.",
      "Persona dinámica, creativa y con vocación de servicio.",
      "Disponibilidad para trabajar fines de semana."
    ]
  },
  {
    id: 3,
    puesto: "Animador(a) de Shows Infantiles",
    requisitos: [
      "Contar con estudios secundarios completos.",
      "Experiencia previa en animaciones de shows infantiles.",
      "Persona dinámica, creativa y con vocación de servicio.",
      "Disponibilidad para trabajar fines de semana."
    ]
  }
];

export const BolsaTrabajo = () => {
  return (
    <section className="bolsa-container">
      <h1 className="titulo-bolsa">
        Crea magia con nosotros
      </h1>

      {trabajos.map((trabajo) => (
        <div className="trabajo-card" key={trabajo.id}>
          
          <div className="trabajo-imagen"></div>

          <div className="trabajo-info">
            <h2>{trabajo.puesto}</h2>

            <span className="etiqueta">
              REQUISITOS
            </span>

            <ul>
              {trabajo.requisitos.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <button className="btn-postular">
              POSTULAR
            </button>
          </div>

        </div>
      ))}
    </section>
  );
};