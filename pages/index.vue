<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        aborstat
      </h1>
      <select v-model="selected" name="states" id="select-state">
        <option disabled value="">select your state</option>
        <option v-for="state in states" :value="state" v-bind:key="state.abbr">{{ state.name }}</option>
      </select>
      <button @click="submitBtn">submit</button>
      <DisplayGestationalLimits :data="gestational_limit" />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import DisplayGestationalLimits from '../components/DisplayGestationalLimits';

export default {
  components: { DisplayGestationalLimits },
  data() {
    return{
      selected: {},
      states: [],
      gestational_limit: {},
    }
  },
  mounted(){
    this.asyncData();
  },
  methods: {
    submitBtn() {
      console.log("hi", this.selected);
      axios.get(`/api/info/gestational_limits/${this.selected.abbr}/`)
      .then((res) => {
        console.log('res', res);
        this.gestational_limit = res.data[0][this.selected.name];           
      }).catch((err) => {
        console.log("there was an error getting gestational limits: ", err);
      })
    },
    async asyncData () {
      axios.get('/api/info/list-of-states')
      .then((response) => {
        console.log('response', response);
        this.states = response.data;
      }).catch((err) => {
        console.log("there was an error getting the list of state: ", err);
      })
    },
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
