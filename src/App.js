import React, { Fragment, useState, useEffect } from 'react';
import Form from './components/form';
import Schedule from './components/schedule'

function App() {

  let schedulesStorage = JSON.parse(localStorage.getItem('schedules'));
  if (!schedulesStorage) {
    schedulesStorage = []
  }

  const [schedules, setSchedules] = useState(schedulesStorage);

  useEffect(() => {
    if(schedulesStorage) {
      localStorage.setItem('schedules', JSON.stringify(schedules));
    } else {
      localStorage.setItem('schedules', JSON.stringify([]));
    }
  },[schedules, schedulesStorage]);

  const createSchedules = schedule => {
    setSchedules([
      ...schedules,
      schedule,
    ]);
  }

  const deleteSchedule = id => {
    const newSchedules = schedules.filter(schedule => schedule.id !== id);
    setSchedules(newSchedules);
  }

  const titulo = schedules.length === 0 ? 'No hay Citas' : 'Administra tus citas';

  return (
    <Fragment>
      <h1>Administrador de Pacientes</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form 
              createSchedules={createSchedules}
            />
          </div>
          <div className="one-half column">
            <h2>{ titulo }</h2>
            {
              schedules.map(schedule => (
                <Schedule
                  key={schedule.id}
                  schedule={schedule}
                  deleteSchedule={deleteSchedule}
                />
              ))
            }
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
