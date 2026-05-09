
import './css/Calendar.css'
import './css/InputSelect.css';
import './css/InputText.css';
import './css/InputFile.css'
import './css/TextArea.css'
export const Input = ({ label, type = "text", placeholder,isRequired=false }) => {
  return (
    <div className="input-container-text">
      <label className="input-label">
        {label} {isRequired ? <span className="required-star">*</span> : null}
      </label>
      <input type={type} className="custom-input-line" placeholder={placeholder} />
    </div>
  );
};

export const InputSelect = ({ label, options, defaultValue }) => {
  return (
    <div className="input-container-select">
      <label className="input-label">
        {label}<span className="required-star">*</span>
      </label>
      <div className="select-wrapper">
        <select className="custom-select">
          <option value="">{defaultValue}</option>
          {options? options.map((opt, i) => 
          <option key={i} value={opt}>{opt}</option>) :
           "vacio"}
        </select>
        <div className="select-arrow-box">
          <span className="arrow-down"></span>
        </div>
      </div>
    </div>
  );
};

export const InputCalendario = () => {
  const days = ["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"];
  // Ejemplo estático basado en la imagen
  const dates = Array.from({ length: 28 }, (_, i) => i + 1);

  return (
    <div className="calendar-container">
      <label className="input-label">Fecha del Evento<span className="required-star">*</span></label>
      <div className="calendar-card">
        <h3 className="calendar-month">Febrero</h3>
        <div className="calendar-grid-header">
          {days.map(d => <span key={d}>{d}</span>)}
        </div>
        <div className="calendar-grid-days">
          {dates.map(date => (
            <div key={date} className={`calendar-day ${date === 14 ? 'selected' : ''}`}>
              {date}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const TextArea = ({rows=10,cols = 10})=>{
  return(<textarea className='input-text-area kanut-description-altern' name="textarea" rows={rows} cols={cols}>Escriba detalles adicionales aqui </textarea>);
}
export const InputFile = ()=>{
  return (<input className='file-input' type="file"></input>)
}

