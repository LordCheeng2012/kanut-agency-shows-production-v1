import './Contact.css'
import {
  Input,
  InputSelect,
  InputCalendario,
  TextArea,
  InputFile,
  Button
} from '@components';
import paths from '@absolute/config';
const {services} = paths();
export const Contact = () => {
  return (
    <div className='content-form-main'>
        <form action="">
            <section className='form-title'>
            <h1 className='kanut-title'>Formulario</h1>
            </section>
            <section className='form-person-info order-content'>
            <Input label={"Nombre Completo"} 
            placeholder={"Escriba sus Nombres"}></Input> 
            </section>
            <section className='form-local-info order-content'>
            <InputSelect label={"Distrito y Referencia"}></InputSelect>
            </section>
            <section className='form-date-info order-content'>
            <InputCalendario></InputCalendario>
            <InputSelect label={"Horario"}></InputSelect>
            <InputSelect label={"N. de Invitados"}></InputSelect>
            </section>
            <section className='form-contact-info order-content'>
              <Input type='number' label={"Telefono"} 
              placeholder={"Ingrese su numero de contacto"} isRequired={true}></Input> 
              <Input label={"Correo Electronico"} 
              placeholder={"Mediante su correo, le mandaremos la informacion nesesaria para el servicio" }isRequired={true}></Input> 
            </section>
            <section className='form-location-info order-content'>
             <h2 className='input-label'>¿Como es el lugar donde será el Evento?<span className='required-star'>*</span></h2>
             <div className='content-check-inputs'>

               <Input type='checkbox' label='Local Alquilado'></Input>
               <Input type='checkbox' label='Casa Propia'></Input>
               <Input type='checkbox' label='Departamento Propio'></Input>
               <Input type='checkbox' label='Terraza'></Input>
               <Input type='checkbox' label='Vía Pública'></Input>
               <Input type='checkbox' label='Jardin'></Input>
               <Input type='checkbox' label='Ambiente Común del Condominio'></Input>
               <Input type='text' label='Otros' placeholder='indique el lugar especificado'></Input>

             </div>
            </section>
            <section className='form-selected-service-info order-content'>
              <h2 className='input-label'>¿Que tipo de Evento vas a Celebrar?<span className='required-star'>*</span></h2>
            <div className='content-check-inputs'>
               <Input type='checkbox' label={ <img src={`${services}/Kanut_Boda.png`} alt="kanut boda servicios" />}></Input>
               <Input type='checkbox' label={<img src={`${services}/Kanut_Eventos_Shows.png`} alt="kanut shows servicios" />}></Input>
               <Input type='checkbox' label={ <img src={`${services}/Kanut_Party.png`} alt="kanut party servicios" />}></Input>
            </div>
            </section>
            <section className='form-about-event-details-info order-content'>
              <h2 className='input-label'>Cuentános mas detalles de tu Evento</h2>
              <TextArea rows={10} cols={80}></TextArea>
              <h2 className='input-label'>Adjuntar archivos o fotos que considere importante para su evento</h2>
              <InputFile></InputFile>
            </section>
          <section className='form-submit order-content'>
            <Button addClass={'btn-blue-primary'}>Solicita tu Cotización</Button>
            
          </section>
        </form>
    </div>
  )
}
