import axios from 'axios';

export default (context, inject) => {
  inject('api', api);
  context.$api = api
}

const api = {
  fetchStates() {
    return axios.get('/api/info/list-of-states').then((result) => {
      return result.data[0]
    })
  }
}