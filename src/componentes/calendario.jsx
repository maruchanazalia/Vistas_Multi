import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Calendario = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className='calendario'>
      <DatePicker  selected={startDate} onChange={(date) => setStartDate(date)} />
    </div>
  );
}

export default Calendario;
