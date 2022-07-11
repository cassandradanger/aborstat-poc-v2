import axios from 'axios';

export default (context, inject) => {
  inject('api', api);
  context.$api = api
}

const api = {
  fetchStates() {
    return axios.get('/api/states').then((result) => {
      return result.data;
    })
  },

  fetchGestationalLimits(state) {
    return axios.get(`/api/gestational_limits/${state}`).then((result) => {
      return result.data
    })
  }
}