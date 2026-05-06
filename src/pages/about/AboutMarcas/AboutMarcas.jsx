import './AboutMarcas.css'

export const AboutMarcas = () => {
  return (
    <div className='content-marcas'>
        <section className='empty-space'>
        </section>
        <section className='types-services-marcas'>
            <div className="c-m-item-service">
             <div className='cmi-service boda-s'></div>
            </div>
            <div className="c-m-item-service ">
             <div className='cmi-service shows-s'></div>
            </div>
            <div className="c-m-item-service ">
             <div className='cmi-service party-s'></div>
            </div>
        </section>
        <section className='description-service'>
            <p className='ds-details kanut-description-altern'>Creamos experiencias auténticas que reflejan elegancia,
                 romanticismo y celebración, cuidando cada detalle e iluminación para transformar
                  momentos especiales en recuerdos inolvidables.
            </p>
        </section>
        <section className='gallery-images-grid'>
        <div className="item-grid-galery spreat-rows">
            <div className="spreat-c item-r">
                <div ></div>
                <div></div>
            </div>
            <div className="item-r only-back"></div>
        </div>
        <div className="item-grid-galery spreat-columns"> 
            <div className="item-c only-back">
                
            </div>
            <div className="item-c spreat-r">
                <div></div>
                <div></div>
            </div>
        </div>
        <div className="item-grid-galery spreat-rows">
            <div className="item-r only-back"></div>
            <div className="item-r spreat-c">
                <div ></div>
                <div></div>
            </div>
        </div>
        <div className="item-grid-galery spreat-rows">
              <div className="item-r only-back"></div>
             <div className="item-r only-back"></div>
        </div>
        
        </section>
    </div>

  )
}
