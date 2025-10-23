// import { useState, useEffect } from "react";
// import axios from "axios";
// import './AdminDashboard.css';

// export default function AdminDashboard({ token }) {
//   const [providers, setProviders] = useState([]);
//   const [selectedProvider, setSelectedProvider] = useState(null);
//   const [slots, setSlots] = useState([]);
//   const [bookings, setBookings] = useState([]);

//   const config = { headers: { Authorization: `Bearer ${token}` } };

//   useEffect(() => {
//     axios.get("https://decentmed-server.vercel.app/api/admin/providers", config)
//       .then(res => setProviders(res.data))
//       .catch(err => console.log(err));

//     axios.get("https://decentmed-server.vercel.app/api/admin/bookings", config)
//       .then(res => setBookings(res.data))
//       .catch(err => console.log(err));
//   }, []);

//   useEffect(() => { if (!selectedProvider) return; setSlots(selectedProvider.slots || []); }, [selectedProvider]);

//   const updateSlots = async () => {
//     if (!selectedProvider) return;
//     await axios.patch(
//       `https://decentmed-server.vercel.app/api/admin/providers/${selectedProvider._id}/slots`,
//       { slots },
//       config
//     );
//     alert("Slots updated");
//   };

//   const handleSlotChange = (index, field, value) => {
//     const newSlots = [...slots];
//     newSlots[index][field] = value;
//     setSlots(newSlots);
//   };

//   const addSlot = () => setSlots([...slots, { date: "", time: "", booked: false }]);
//   const removeSlot = (index) => setSlots(slots.filter((_,i)=>i!==index));

//   return (
//     <div className="admin-dashboard-container">
//       <h2>Admin Dashboard</h2>

//       <div className="provider-select">
//         <label>Select Provider</label>
//         <select onChange={e => setSelectedProvider(providers.find(p => p._id === e.target.value))}>
//           <option value="">-- Select Provider --</option>
//           {providers.map(p => <option key={p._id} value={p._id}>{p.name}</option>)}
//         </select>
//       </div>

//       {selectedProvider && (
//         <div className="slots-section">
//           <h3>Manage Slots</h3>
//           {slots.map((s,i) => (
//             <div key={i} className="slot-row">
//               <input type="date" value={s.date} onChange={e=>handleSlotChange(i,"date",e.target.value)}/>
//               <input type="time" value={s.time} onChange={e=>handleSlotChange(i,"time",e.target.value)}/>
//               <button onClick={()=>removeSlot(i)}>Delete</button>
//             </div>
//           ))}
//           <button onClick={addSlot}>Add Slot</button>
//           <button onClick={updateSlots}>Save Slots</button>
//         </div>
//       )}

//       <div className="all-bookings">
//         <h3>All Bookings</h3>
//         <table>
//           <thead>
//             <tr>
//               <th>Provider</th><th>Date</th><th>Time</th><th>User Name</th><th>User Email</th>
//             </tr>
//           </thead>
//           <tbody>
//             {bookings.map(b => {
//               const provider = providers.find(p=>p._id===b.providerId);
//               return <tr key={b._id}>
//                 <td>{provider?.name || "Unknown"}</td>
//                 <td>{b.date}</td>
//                 <td>{b.time}</td>
//                 <td>{b.userName}</td>
//                 <td>{b.userEmail}</td>
//               </tr>
//             })}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }



import { useEffect, useState } from 'react';
import { getAllBookings, getAllProvidersAdmin } from '../api';

export default function AdminDashboard() {
  const [bookings, setBookings] = useState([]);
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    getAllBookings().then(res => setBookings(res.data));
    getAllProvidersAdmin().then(res => setProviders(res.data));
  }, []);

  return (
    <div style={{maxWidth:'900px',margin:'auto'}}>
      <h1>Admin Dashboard</h1>
      <h2>Providers</h2>
      {providers.map(p=>(
        <div key={p._id} style={{border:'1px solid #ddd',padding:'8px',margin:'6px 0'}}>
          {p.name} - {p.specialization}
        </div>
      ))}
      <h2>All Bookings</h2>
      {bookings.map(b=>(
        <div key={b._id} style={{border:'1px solid #ccc',padding:'6px',margin:'4px 0'}}>
          {b.userName} booked {b.providerId} on {b.date} at {b.time}
        </div>
      ))}
    </div>
  );
}

