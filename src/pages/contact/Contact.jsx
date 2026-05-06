import React from 'react'
import './Contact.css'
import { Calendar } from '../../components/inputs/Inputs.jsx'
export const Contact = () => {
  return (
    <div className='content-form-main'>
        <form action="">
            <section className='form-title'>
            <h1 className='kanut-title'>Formulario</h1>
            </section>
            <section className='form-person-info'>

            </section>
            <section className='form-local-info'>

            </section>
            <section className='form-date-info'>
                <Calendar></Calendar>
               <input type="date" value="2026-05-10" name="" id="" hidden />
            </section>
            <section className='form-contact-info'>

            </section>
            <section className='form-location-info'>

            </section>
            <section className='form-selected-service-info'>
            </section>
            <section className='form-about-event-details-info'>

            </section>

            <button type="submit">Solicita tu Cotización</button>
        </form>
    </div>
  )
}
