// import { useState, useEffect } from "react";
// import axios from "axios";
// import './BookingForm.css';

// export default function BookingForm({ token }) {
//   const [providers, setProviders] = useState([]);
//   const [selectedProvider, setSelectedProvider] = useState("");
//   const [slots, setSlots] = useState([]);
//   const [selectedSlot, setSelectedSlot] = useState(null);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");

//   const config = { headers: { Authorization: `Bearer ${token}` } };

//   useEffect(() => {
//     axios.get("https://decentmed-server.vercel.app/api/providers", config)
//       .then(res => setProviders(res.data))
//       .catch(err => console.log(err));
//   }, []);

//   useEffect(() => {
//     if (!selectedProvider) return;
//     axios.get(`https://decentmed-server.vercel.app/api/providers/${selectedProvider}/slots`, config)
//       .then(res => setSlots(res.data.filter(s => !s.booked)))
//       .catch(err => console.log(err));
//   }, [selectedProvider]);

//   const handleBooking = async (e) => {
//     e.preventDefault();
//     if (!selectedProvider || !selectedSlot) return alert("Select provider & slot");

//     const [date, time] = [selectedSlot.date, selectedSlot.time];

//     try {
//       const userId = token ? JSON.parse(atob(token.split('.')[1])).id : "guest";
//       const res = await axios.post("https://decentmed-server.vercel.app/api/bookings", {
//         providerId: selectedProvider,
//         userId,
//         userName: name,
//         userEmail: email,
//         date,
//         time
//       }, config);
//       alert(res.data.message);
//       setSelectedProvider(""); setSlots([]); setSelectedSlot(null); setName(""); setEmail("");
//     } catch (err) {
//       console.error(err);
//       alert(err.response?.data?.message || "Booking failed");
//     }
//   };

//   return (
//     <div className="booking-form-container">
//       <h2>Book Appointment</h2>
//       <form onSubmit={handleBooking} className="booking-form">
//         <label>Select Provider</label>
//         <select value={selectedProvider} onChange={e => setSelectedProvider(e.target.value)} required>
//           <option value="">-- Select Provider --</option>
//           {providers.map(p => <option key={p._id} value={p._id}>{p.name} - {p.specialization || "General"}</option>)}
//         </select>

//         {slots.length > 0 && <>
//           <label>Available Slots</label>
//           <select value={selectedSlot?._id || ""} onChange={e => setSelectedSlot(slots.find(s => s._id === e.target.value))} required>
//             <option value="">-- Select Slot --</option>
//             {slots.map((s, i) => <option key={i} value={s._id}>{s.date} - {s.time}</option>)}
//           </select>
//         </>}

//         <label>Your Name</label>
//         <input type="text" value={name} onChange={e => setName(e.target.value)} required />

//         <label>Your Email</label>
//         <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />

//         <button type="submit">Book Appointment</button>
//       </form>
//     </div>
//   );
// }



// import React, { useEffect, useState } from 'react';
// import { bookAppointment, getProviderSlots } from '../../api';

// export default function BookingForm({ provider }) {
//   const [slots, setSlots] = useState([]);
//   const [selected, setSelected] = useState(null);
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');

//   useEffect(() => {
//     if(provider) {
//       getProviderSlots(provider._id).then(res => setSlots(res.data));
//     }
//   }, [provider]);

//   const handleBooking = () => {
//     if(!selected) return alert('Select a slot');
//     bookAppointment({ providerId:provider._id, date:selected.date, time:selected.time, userName:name, userEmail:email })
//       .then(res => alert('Booked successfully!'))
//       .catch(err => alert(err.response?.data?.message || 'Booking failed'));
//   }

//   return (
//     <div className="booking-form">
//       <h3>Book Appointment with {provider?.name}</h3>
//       <input type="text" placeholder="Your Name" value={name} onChange={e=>setName(e.target.value)} />
//       <input type="email" placeholder="Your Email" value={email} onChange={e=>setEmail(e.target.value)} />
//       <div className="slots">
//         {slots.map((s,i)=>(
//           <button 
//             key={i} 
//             disabled={s.booked} 
//             className={selected===s ? 'selected':''} 
//             onClick={()=>setSelected(s)}
//           >
//             {s.date} - {s.time} {s.booked ? '(Booked)' : ''}
//           </button>
//         ))}
//       </div>
//       <button onClick={handleBooking} className="book-btn">Book Now</button>

//       <style jsx>{`
//         .booking-form { max-width:500px;margin:auto;padding:20px;border:1px solid #ddd;border-radius:8px; }
//         input { display:block;width:100%;margin:8px 0;padding:8px;border:1px solid #ccc;border-radius:4px; }
//         .slots button { margin:4px; padding:6px 10px; border-radius:4px; cursor:pointer; }
//         .slots .selected { background:#007bff;color:#fff; }
//         .book-btn { margin-top:12px;padding:10px 16px;background:#28a745;color:#fff;border:none;border-radius:6px;cursor:pointer; }
//       `}</style>
//     </div>
//   );
// }



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// export default function BookingForm({ token }) {
//   const [providers, setProviders] = useState([]);
//   const [selectedProvider, setSelectedProvider] = useState("");
//   const [slots, setSlots] = useState([]);
//   const [selectedSlot, setSelectedSlot] = useState(null);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");

//   const config = { headers: { Authorization: `Bearer ${token}` } };

//   // Fetch all providers
//   useEffect(() => {
//     axios.get("https://decentmed-server.vercel.app/api/providers", config)
//       .then(res => setProviders(res.data))
//       .catch(err => console.log(err));
//   }, []);

//   // Fetch slots for selected provider
//   useEffect(() => {
//     if (!selectedProvider) {
//       setSlots([]);
//       setSelectedSlot(null);
//       return;
//     }
//     axios.get(`https://decentmed-server.vercel.app/api/providers/${selectedProvider}/slots`, config)
//       .then(res => setSlots(res.data.filter(s => !s.booked)))
//       .catch(err => console.log(err));
//   }, [selectedProvider]);

//   const handleBooking = async (e) => {
//     e.preventDefault();
//     if (!selectedProvider || !selectedSlot) return alert("Select provider & slot");

//     try {
//       const userId = token ? JSON.parse(atob(token.split('.')[1])).id : "guest";
//       const res = await axios.post("https://decentmed-server.vercel.app/api/bookings", {
//         providerId: selectedProvider,
//         userId,
//         userName: name,
//         userEmail: email,
//         date: selectedSlot.date,
//         time: selectedSlot.time
//       }, config);
//       alert(res.data.message);
//       setSelectedProvider(""); setSlots([]); setSelectedSlot(null); setName(""); setEmail("");
//     } catch (err) {
//       console.error(err);
//       alert(err.response?.data?.message || "Booking failed");
//     }
//   };

//   return (
//     <div className="booking-form-container">
//       <h2>Book Appointment</h2>
//       <form onSubmit={handleBooking} className="booking-form">
//         <label>Select Provider</label>
//         <select value={selectedProvider} onChange={e => setSelectedProvider(e.target.value)} required>
//           <option value="">-- Select Provider --</option>
//           {providers.map(p => <option key={p._id} value={p._id}>{p.name} - {p.specialization || "General"}</option>)}
//         </select>

//         {slots.length > 0 && <>
//           <label>Available Slots</label>
//           <select value={selectedSlot?._id || ""} onChange={e => setSelectedSlot(slots.find(s => s._id === e.target.value))} required>
//             <option value="">-- Select Slot --</option>
//             {slots.map((s, i) => <option key={i} value={s._id}>{s.date} - {s.time}</option>)}
//           </select>
//         </>}

//         <label>Your Name</label>
//         <input type="text" value={name} onChange={e => setName(e.target.value)} required />

//         <label>Your Email</label>
//         <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />

//         <button type="submit">Book Appointment</button>
//       </form>

//       <style jsx>{`
//         .booking-form-container { max-width:500px;margin:auto;padding:20px;border:1px solid #ddd;border-radius:8px; }
//         .booking-form label { display:block; margin-top:12px; font-weight:500; }
//         .booking-form select, .booking-form input { display:block;width:100%;margin:8px 0;padding:8px;border:1px solid #ccc;border-radius:4px; }
//         .booking-form button { margin-top:16px;padding:10px 16px;background:#28a745;color:#fff;border:none;border-radius:6px;cursor:pointer; }
//         .booking-form button:hover { background:#218838; }
//       `}</style>
//     </div>
//   );
// }


import axios from 'axios';
import { useEffect, useMemo, useState } from 'react';

export default function BookingForm({ token }) {
console.log("TOKEN:43434", token);

  const [providers, setProviders] = useState([]);
  const [selectedProvider, setSelectedProvider] = useState("");
  const [slots, setSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

const config = useMemo(() => ({
    headers: { Authorization: `Bearer ${token}` } 
}), [token]);
  // Fetch providers
useEffect(() => {
    axios.get("https://decentmed-server.vercel.app/api/providers", config)
        .then(res => setProviders(res.data))
        .catch(err => console.log(err));
}, [config]); // ✅ Only re-runs when 'token' (via 'config') changes.
  // Fetch slots when provider changes
  useEffect(() => {
    if (!selectedProvider) {
      setSlots([]);
      setSelectedSlot(null);
      return;
    }
    axios.get(`https://decentmed-server.vercel.app/api/providers/${selectedProvider}/slots`, config)
      .then(res => setSlots(res.data.filter(s => !s.booked)))
      .catch(err => console.log(err));
  }, [selectedProvider,config]);

  const handleBooking = async (e) => {
    e.preventDefault();
    if (!selectedProvider || !selectedSlot) return alert("Select provider & slot");

    try {
      const res = await axios.post("https://decentmed-server.vercel.app/api/bookings", {
        providerId: selectedProvider,
        userName: name,
        userEmail: email,
        date: selectedSlot.date,
        time: selectedSlot.time
      }, config);

      alert(res.data.message);
      setSelectedProvider(""); setSlots([]); setSelectedSlot(null); setName(""); setEmail("");
    } catch(err) {
      console.error(err);
      alert(err.response?.data?.message || "Booking failed");
    }
  };

  return (
    <div className="booking-form-container">
      <h2>Book Appointment</h2>
      <form onSubmit={handleBooking} className="booking-form">
        <label>Select Provider</label>
        <select value={selectedProvider} onChange={e => setSelectedProvider(e.target.value)} required>
          <option value="">-- Select Provider --</option>
          {providers.map(p => <option key={p._id} value={p._id}>{p.name} - {p.specialization || "General"}</option>)}
        </select>

        {slots.length > 0 && <>
          <label>Available Slots</label>
          <div className="slots-container">
            {slots.map((s, i) => (
              <button
                type="button"
                key={i}
                disabled={s.booked}
                className={selectedSlot === s ? 'slot-btn selected' : 'slot-btn'}
                onClick={() => setSelectedSlot(s)}
              >
                {s.date} - {s.time} {s.booked ? '(Booked)' : ''}
              </button>
            ))}
          </div>
        </>}

        <label>Your Name</label>
        <input type="text" value={name} onChange={e => setName(e.target.value)} required />

        <label>Your Email</label>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />

        <button type="submit">Book Appointment</button>
      </form>

      <style jsx>{`
        .booking-form-container { max-width:500px;margin:auto;padding:20px;border:1px solid #ddd;border-radius:8px; }
        .booking-form label { display:block; margin-top:12px; font-weight:500; }
        .booking-form select, .booking-form input { display:block;width:100%;margin:8px 0;padding:8px;border:1px solid #ccc;border-radius:4px; }
        .slots-container { display:flex; flex-wrap:wrap; gap:8px; margin:8px 0; }
        .slot-btn { padding:8px 12px; border:1px solid #ccc; border-radius:4px; cursor:pointer; background:#f8f9fa; }
        .slot-btn.selected { background:#007bff; color:#fff; }
        .slot-btn:disabled { background:#eee; color:#999; cursor:not-allowed; }
        .booking-form button[type="submit"] { margin-top:16px;padding:10px 16px;background:#28a745;color:#fff;border:none;border-radius:6px;cursor:pointer; }
        .booking-form button[type="submit"]:hover { background:#218838; }
      `}</style>
    </div>
  );
}

