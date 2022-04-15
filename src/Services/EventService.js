import axios from 'axios';

const apiClient = axios.create({
  baseURL: `https://mock.follow.it/`,
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  getUsers() {
    return apiClient.get('/profiles.json');
  },
  //   getEvent(id) {
  //     return apiClient.get('/events/' + id);
  //   },
  //   postEvent(event) {
  //     return apiClient.post('/events', event);
  //   },
};
