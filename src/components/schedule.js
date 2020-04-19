import React, { Fragment } from 'react';

const schedule = ({ schedule, deleteSchedule }) => (
    <Fragment>
      <div className="cita">
        <p>Paciente <span>{schedule.namePatient}</span></p>
        <p>Familiar <span>{schedule.nameFamily}</span></p>
        <p>Fecha <span>{schedule.date}</span></p>
        <p>Sintomas <span>{schedule.symthom}</span></p>

        <button
          className="u-width-full button eliminar"
          onClick={ () => deleteSchedule(schedule.id) }
        >Eliminar</button>
      </div>
    </Fragment>
);

export default schedule;
