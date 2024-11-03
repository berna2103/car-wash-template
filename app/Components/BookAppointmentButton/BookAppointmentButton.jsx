import React from "react";

export default function BookAppointmentButton(props) {
  return (
    <div>
      <a
        href="#appointment"
        className="bg-sky-300 hover:bg-blue-00 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
      >
        Book Appointment
      </a>
    </div>
  );
}
