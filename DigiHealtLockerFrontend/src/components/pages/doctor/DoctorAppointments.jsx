import React, { useEffect, useState } from 'react'
import DoctorHeader from './DoctorHeader'
import allAppointments from '../../../utils/allAppointments'
import { NavLink } from 'react-router-dom'


const DoctorAppointments = () => {
  const [registrationNo, setRegistrationNo] = useState('');
  let [doctorAllAppointments, setdoctorAllAppointments] = useState([]);

  const handleRegistrationChange = (e) => {
    setRegistrationNo(e.target.value);

  };

  const getTheList = async () => {
    doctorAllAppointments = await allAppointments(registrationNo);
    setdoctorAllAppointments(doctorAllAppointments)
    console.log(doctorAllAppointments);
  }

  return (
    <>
      <DoctorHeader />
      <div className="overflow-x-auto flex items-center justify-center">
        <div>
          <div className='mt-10 flex justify-between'>
            <h1 className="text-3xl font-semibold text-center text-teal-600">Appointment List</h1>
            <NavLink to="/doctor/appointments/addappointment">
              <button
                type="submit"
                className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-4 py-2 rounded focus:outline-none focus:bg-teal-600"
              >
                Add Appointment
              </button></NavLink>
          </div>
          <div className='className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-md "'>
            <h2 className="text-2xl font-bold mb-4 text-teal-600 flex justify-center items-center">Search List</h2>
            <div className="max-w-2xl flex justify-center items-center">
              <label htmlFor="aadharNo" className="mr-2">Enter Registration No:</label>
              <input
                type="text"
                id="aadharNo"
                value={registrationNo}
                onChange={handleRegistrationChange}
                placeholder="Enter Registration No"
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-teal-500 flex-grow"
              />
              <button onClick={getTheList} className="ml-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-teal-300">
                Search
              </button>
            </div>
          </div>
          <table className="min-w-4xl bg-white shadow-lg rounded mt-5">
            <thead className='border'>
              <tr className="text-left  text-teal-600">
                {/* <th className="py-3 px-4">Appointment ID</th> */}
                <th className="py-3 px-4">Patient Name</th>
                <th className="py-3 px-4">Date</th>
                <th className="py-3 px-4">Time</th>
                <th className="py-3 px-4">Problem</th>
                {/* <th className="py-3 px-4">Status</th> */}
                <th className="py-3 px-4">Details</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {doctorAllAppointments.map(appointment => (
                <tr key={appointment.patientAddharnumber}>
                  {/* <td className="border-b py-3 px-4">{appointment.appointment_id}</td> */}
                  <td className="border-b py-3 px-4">{appointment.patientName}</td>
                  <td className="border-b py-3 px-4">{appointment.appointmentDate}</td>
                  <td className="border-b py-3 px-4">{appointment.time}</td>
                  <td className="border-b py-3 px-4">{appointment.problem}</td>
                  {/* <td className="border-b py-3 px-4">
                    <span className={appointment.status === 'Accepted' ? 'text-green-600' : appointment.status === 'Rejected' ? 'text-red-600' : 'text-yellow-500'}>
                      {appointment.status}
                    </span>
                  </td> */}
                  <td className="border-b py-3 px-4 underline text-sm hover:text-blue-600"><NavLink to={'appointmentdetails/' + appointment.patientAddharnumber + "/" + registrationNo}>view more</NavLink></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div >
    </>
  )
}

export default DoctorAppointments