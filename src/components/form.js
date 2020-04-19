import React, { Fragment, useState } from 'react';
import { v4 as uuid } from 'uuid'

const Form = ({ createSchedules }) => {

  const [schedule, setSchedule] = useState({
    namePatient: '',
    nameFamily: '',
    date: '',
    symptom: '',
  });

  const [error, setError] = useState(false);

  const handlerState = e => {
    setSchedule({
      ...schedule,
      [e.target.name]: e.target.value
    })
  }

  const { namePatient, nameFamily, date, symptom } = schedule;

  const submitSchedule = e => {
    e.preventDefault();
    
    if(namePatient.trim() === '' || nameFamily.trim() === '' ||
    date.trim() === '' || symptom.trim() === '') {
      return setError(true);
    }
    setError(false);
  
    schedule.id = uuid();
    createSchedules(schedule);

    setSchedule({
      namePatient: '',
      nameFamily: '',
      date: '',
      symptom: '',
    })
  }

  return (
    <Fragment>
      <h2>Crear Cita</h2>
      { error 
        ? <p className="alerta-error">Campos vacios</p> 
        : null
      }
      <form onSubmit={submitSchedule}>
        <label>Nombre Paciente</label>
        <input
          type="text"
          name="namePatient"
          className="u-full-width"
          onChange={handlerState}
          value={namePatient}
        />
        <label>Nombre Familiar</label>
        <input
          type="text"
          name="nameFamily"
          className="u-full-width"
          onChange={handlerState}
          value={nameFamily}
        />
        <label>Fecha</label>
        <input
          type="date"
          name="date"
          className="u-full-width"
          onChange={handlerState}
          value={date}
        />
        <label>Sintomas</label>
        <textarea
          name="symptom"
          className="u-full-width"
          onChange={handlerState}
          value={symptom}
        />
        <button 
          type="submit"
          className="u-full-width button-primary"
          onChange={handlerState}
        >Agregar Cita</button>
      </form>
    </Fragment>
  );
}

export default Form;
