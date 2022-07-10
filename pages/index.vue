<template>
  <div class="container">
    <div>
      <img class="logo" src="../assets/uterlight.png"/>
      <h1 class="title">
        aborstat
      </h1>
      <label id="select-state">search by state</label>
      <select v-model="selected" name="states" id="select-state">
        <option disabled value="">select your state</option>
        <option v-for="state in states" :value="state" v-bind:key="state.abbr">{{ state.name }}</option>
      </select>
      <button @click="submitBtn">submit</button>
      <DisplayGestationalLimits :data="gestational_limit" />
      <h6>abortion status - data provided by <a target="_blank" href="http://www.abortionpolicyapi.com">Abortion Policy API</a></h6>
      <h6>awesome nuxt/expressjs template provide by <a target="_blank" href="https://github.com/nuxt-community/express-template">nuxt-community</a></h6>
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
      axios.get(`/api/info/gestational_limits/${this.selected.abbr}/`)
      .then((res) => {
        this.gestational_limit = res.data[0][this.selected.name];           
      }).catch((err) => {
        console.log("there was an error getting gestational limits: ", err);
      })
    },
    async asyncData () {
      axios.get('/api/info/list-of-states')
      .then((response) => {
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
  margin: 40px auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  text-align: center;
}
.logo {
  height: 200px;
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

</style>
