export default (context, inject) => {
  inject('api', api);
  context.$api = api
}

const api = {
  getData() {
    return 'booo';
  }
}