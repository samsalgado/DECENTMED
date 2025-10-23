// import { useState, useEffect } from "react";
// import axios from "axios";
// import './ProviderDashboard.css';

// export default function ProviderDashboard({ providerId, token }) {
//   const [slots, setSlots] = useState([]);
//   const [date, setDate] = useState("");
//   const [time, setTime] = useState("");
//   const [bookings, setBookings] = useState([]);

//   const config = { headers: { Authorization: `Bearer ${token}` } };

//   useEffect(() => { fetchSlots(); fetchBookings(); }, []);

//   const fetchSlots = async () => {
//     const res = await axios.get(`https://decentmed-server.vercel.app/api/providers/${providerId}/slots`, config);
//     setSlots(res.data);
//   };

//   const fetchBookings = async () => {
//     const res = await axios.get(`https://decentmed-server.vercel.app/api/bookings/${providerId}`, config);
//     setBookings(res.data);
//   };

//   const addSlot = async () => {
//     if (!date || !time) return;
//     await axios.post(`https://decentmed-server.vercel.app/api/providers/${providerId}/slots`, { slots: [{ date, time, booked:false }] }, config);
//     setDate(""); setTime("");
//     fetchSlots();
//   };

//   return (
//     <div className="provider-dashboard-container">
//       <h2>Provider Dashboard</h2>

//       <div className="slot-section">
//         <h3>Add Slot</h3>
//         <input type="date" value={date} onChange={e => setDate(e.target.value)} />
//         <input type="time" value={time} onChange={e => setTime(e.target.value)} />
//         <button onClick={addSlot}>Add Slot</button>
//       </div>

//       <div className="slots-list">
//         <h3>Slots</h3>
//         <ul>
//           {slots.map((s,i)=><li key={i}>{s.date} - {s.time} | {s.booked?"Booked":"Available"}</li>)}
//         </ul>
//       </div>

//       <div className="bookings-list">
//         <h3>Bookings</h3>
//         <ul>
//           {bookings.map(b=><li key={b._id}>{b.date} - {b.time} | {b.userName} ({b.userEmail})</li>)}
//         </ul>
//       </div>
//     </div>
//   );
// }



import { useState } from 'react';
import ProviderList from '../Components/ProviderList';
import BookingForm from '../pages/BookingForm/BookingForm';

export default function ProviderDashboard() {
  const [selectedProvider, setSelectedProvider] = useState(null);
  return (
    <div>
      <h1>Provider Dashboard</h1>
      {!selectedProvider && <ProviderList onSelect={setSelectedProvider} />}
      {selectedProvider && <BookingForm provider={selectedProvider} />}
      {selectedProvider && <button onClick={()=>setSelectedProvider(null)} style={{marginTop:'12px'}}>Back to Providers</button>}
    </div>
  );
}

