import React from 'react';
import Volunteer from './Volunteer';
import GoogleCalendar from './GCalendar';

const VolunteerAndCalendar = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/2">
          <Volunteer />
        </div>
        <div className="w-full lg:w-1/2">
          <GoogleCalendar />
        </div>
      </div>
    </div>
  );
};

export default VolunteerAndCalendar;