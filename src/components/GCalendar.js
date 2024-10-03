import React from 'react';

const GoogleCalendar = () => {
  // Public Google Calendar embed URL
  const calendarUrl = "https://calendar.google.com/calendar/embed?src=176812a637fd71c1c27f95343d3896d3676f714b3fdecb1977ff3365604033a9%40group.calendar.google.com&ctz=America%2FNew_York";

  return (
    <div id="events" className="p-4">
      <section className="my-4 py-0">
        <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Upcoming Events</h2>
      </section>
      
      <div className="calendar-container relative pb-[75%] h-0 overflow-hidden">
        <iframe
          src={calendarUrl}
          className="absolute top-0 left-0 w-full h-full"
          frameBorder="0"
          scrolling="no"
          title="Horse Farm Events Calendar"
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleCalendar;
