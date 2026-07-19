import './Questions.css'
import data from  '../../../data/questions.json'
export const Questions = ({ questions = data }) => {
  return (
    <div className='questions-frequests-content'>
      <div className="title-q-f">
        <h1>¿Por qué elegir la magia de Kanut?</h1>
      </div>
      <div className="content-questions-list bootstrap-iso">
        <div className="accordion" id="accordionExample">
          {questions.map((question, index) => {
            return (
              <div className="accordion-item" key={index}>
                <h2 className="accordion-header">
                  <button 
                    className="accordion-button collapsed" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target={`#collapse${index}`}
                    aria-expanded="false" 
                    aria-controls={`collapse${index}`}
                  >
                    <span className="question-circle"></span>
                    {question.title}
                  </button>
                </h2>
                <div 
                  id={`collapse${index}`} 
                  className="accordion-collapse collapse" 
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>{question.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
