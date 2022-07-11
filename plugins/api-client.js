export default (context, inject) => {
  inject('api', api);
  context.$api = api
}

const api = {
  async fetchStates() {
      let response = await fetch('https://reliable-fenglisu-232031.netlify.app/api/states', {
        method: 'GET',
        credentials: 'same-origin'
      });
      let data = await response.json();
      return data.states;
  },

  async fetchGestationalLimits(state) {
    let response = await fetch(`/api/gestational_limits/${state}`);
      let data = await response.json();
      return data;
  }
}