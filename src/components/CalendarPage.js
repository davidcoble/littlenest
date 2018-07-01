import React from 'react';

const CalendarPage = () => (
    <div className='content'>
        <h2>Calendar</h2>

        <h3>School Year 2018-2019</h3>

        <p>During the school year, we will adhere to Seattle Public Schools'
            schedule of holidays and weather events.  In the event that SPS are
            delayed, Little Nest will follow the SPS head start and preschool
            schedule.</p>

        <iframe
            src="https://www.google.com/calendar/embed?src=va2fbm17mt82qvo33qd0r1fejs%40group.calendar.google.com&ctz=America/Los_Angeles"
            width="800" height="600" frameBorder="0" scrolling="no"></iframe>


    </div>
);

export default CalendarPage;
