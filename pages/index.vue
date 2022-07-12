<template>
  <div class="container">
    <div>
      <img class="logo" src="../assets/uterlight-purple.png"/>
      <h1 class="title">
        aborstat
      </h1>
      <label id="select-state">search by state</label>
      <select v-model="selected" name="states" id="select-state">
        <option disabled value="">select your state</option>
        <option v-for="state in states" :value="state" v-bind:key="state.abbr">{{ state.name }}</option>
      </select>
      <button @click="submitBtn">submit</button>
      <DisplayGestationalLimits :data="gestational_limit" :selected-state="confirmSelected"/>
      <span class="data-attr-wrapper">
        <h6>abortion status - data provided by <a target="_blank" href="http://www.abortionpolicyapi.com">Abortion Policy API</a>, which should be consistent with the data from the <a href=" https://www.guttmacher.org/state-policy/laws-policies">Guttmacher Institute</a></h6>
        <h6>nuxt/expressjs template provided by <a target="_blank" href="https://github.com/nuxt-community/express-template">nuxt-community</a></h6>
      </span>
    </div>
  </div>
</template>

<script>
import DisplayGestationalLimits from '../components/DisplayGestationalLimits';

export default {
  components: { DisplayGestationalLimits },
  data() {
    return{
      selected: {},
      states: [],
      gestational_limit: {},
      confirmSelected: ''
    }
  },
  mounted(){
    this.getStates();
  },
  methods: {
    async getStates() {
     this.states = await this.$api.fetchStates();
    },
    async submitBtn() {
      let response = await this.$api.fetchGestationalLimits(this.selected.abbr);
      this.gestational_limit = response[this.selected.name];
      this.confirmSelected = this.selected.name;
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
}
.logo {
  height: 130px;
}
.title {
  display: block;
  font-size: 50px;
  font-weight: 500;
  color: #35495e;
  letter-spacing: 2px;
  margin: 0 0 30px;
}

#select-state, button {
  font-size: 17px;
}

.data-attr-wrapper {
  margin-bottom: 0;
}

</style>
