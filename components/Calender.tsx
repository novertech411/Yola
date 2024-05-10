import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

function Calender() {
  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      weekends={true}
      events={[
        { title: 'Event 1', date: '2024-05-01' },
        { title: 'Event 2', date: '2024-05-02' },
      ]}
    />
  );
}

export default Calender;
