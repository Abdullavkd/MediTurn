import axios from "axios";


const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
});


API.interceptors.response.use((response) => response, async (error) => {
  if (error.response.status === 401 && !error.config._retry) {
    error.config._retry = true;

    try {
        await axios.get(`${import.meta.env.VITE_API_BASE_URL}/auth/refresh`, { withCredentials: true });
        return API(error.config);
    } catch (refreshError) {
        window.location.href = "/login";
        return Promise.reject(refreshError);
    }
  }
  return Promise.reject(error);
}
)



// call every API request with credentials to include cookies
export const api = {
  auth: {
    register: (data) => API.post('/auth/register', data),
    login: (data) => API.post('/auth/login', data),
    logout: () => API.post('/auth/logout'),
    forgotPassword: (data) => API.post('/auth/forgot-password', data),
    resetPassword: (data) => API.post('/auth/reset-password', data),
    deleteAccount: () => API.delete('/auth/delete-account'),
  },
  user: {
    getAllUsers: () => API.get('/user/users'),
    getProfile: () => API.get('/user/user-profile'),
    updateProfile: (data) => API.put('/user/user-update', data),
    deleteProfile: () => API.delete('/user/user-delete'),
  },
  appointment: {
    book: (clinicId, data) => API.post(`/appointment/book/${clinicId}`, data),
    getByClinic: (clinicId) => API.get(`/appointment/appointments/${clinicId}`),
    getById: (appointmentId) => API.get(`/appointment/appointment/${appointmentId}`),
    update: (appointmentId, data) => API.put(`/appointment/update/${appointmentId}`, data),
    updateStatus: (appointmentId, data) => API.patch(`/appointment/status/${appointmentId}`, data),
    cancel: (appointmentId) => API.put(`/appointment/cancel/${appointmentId}`),
  },
  clinic: {
    create: (data) => API.post('/clinic/create', data),
    getAll: () => API.get('/clinic/allclinic'),
    getById: (id) => API.get(`/clinic/byid/${id}`),
    getByOwner: (id) => API.get(`/clinic/byowner/${id}`),
    update: (id, data) => API.put(`/clinic/update/${id}`, data),
    delete: (id) => API.delete(`/clinic/delete/${id}`)
  },
  doctor: {
    add: (clinicId, data) => API.post(`/doctor/add/doctor/${clinicId}`, data),
    getByClinic: (clinicId) => API.get(`/doctor/clinic/doctors/${clinicId}`),
    updateAvailability: (data) => API.patch('/doctor/update/availability', data),
    getById: (id) => API.get(`/doctor/byid/${id}`),
    delete: (id) => API.delete(`/doctor/delete/${id}`),
    update: (id, data) => API.put(`/doctor/update/${id}`, data)
  },
  queue: {
    getQueue: (clinicId) => API.get(`/queue/live/${clinicId}`),
    getHistory: (clinicId) => API.get(`/queue/history/${clinicId}`),
    callNext: (clinicId) => API.post(`/queue/next/${clinicId}`),
  },
  receptionist: {
    add: (clinicId, data) => API.post(`/receptionist/add/${clinicId}`, data),
    getByClinic: (clinicId) => API.get(`/receptionist/clinic/${clinicId}`),
    getById: (id) => API.get(`/receptionist/${id}`),
    delete: (id) => API.delete(`/receptionist/${id}`),
  },
  report: {
    dailyReport: (clinicId) => API.get(`/report/daily/${clinicId}`),
  }
};

export default API;