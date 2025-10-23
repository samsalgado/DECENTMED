import axios from 'axios';

const API = axios.create({
  baseURL: "https://decentmed-server.vercel.app/api",
});

export const getProviders = () => API.get('/providers');
export const getProviderSlots = (id) => API.get(`/providers/${id}/slots`);
export const addProviderSlots = (id, slots) => API.post(`/providers/${id}/slots`, {slots});
export const bookAppointment = (data) => API.post('/bookings', data);
export const getBookingsByProvider = (providerId) => API.get(`/bookings/${providerId}`);
export const getAllBookings = () => API.get('/admin/bookings');
export const getAllProvidersAdmin = () => API.get('/admin/providers');
export const updateProviderSlotsAdmin = (id, slots) => API.patch(`/admin/providers/${id}/slots`, {slots});
