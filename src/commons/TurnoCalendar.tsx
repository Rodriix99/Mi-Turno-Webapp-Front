import React, { useState } from 'react';
import Calendar, { CalendarProps } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
//calendario
type Props = CalendarProps & {
  onChangeDate: (date: Date) => void;
};

const TurnoCalendar: React.FC<Props> = ({ onChangeDate, ...calendarProps }) => {
  const [date, setDate] = useState<Date | null>(null);

  const handleDateConChange = (date: Date | Date[]) => {
    onChangeDate(Array.isArray(date) ? date[0] : date);

     if (Array.isArray(date)) {
      setDate(date[0]);
      onChangeDate(date[0]);
    } else {
      setDate(date);
      onChangeDate(date);
    } 
  };
  
  
  return <Calendar value={date}  onChange={handleDateConChange} {...calendarProps} />;
};

export default TurnoCalendar;