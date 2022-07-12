<template>
  <div class="display-info-wrapper">
    <label v-if="formatLMP()">general abortion status for {{ selectedState }}:</label>
    <p v-if="formatLMP()">{{ formatLMP() }}</p>
    <label v-if="formatException() || formatHealth() || formatFetus() || formatRape()">possible exceptions for {{ selectedState }}:</label>
    <p v-if="formatException()">{{ formatException() }}</p>
    <p v-if="formatHealth()">{{ formatHealth() }}</p>
    <p v-if="formatFetus()">{{ formatFetus() }}</p>
    <p v-if="formatRape()">{{ formatRape() }}</p>
    <p v-if="selectedState && !formatLMP() && !formatException() && !formatHealth() && !formatFetus() && !formatRape()">
      sorry - there is no data being returned from the <a target="_blank" href="http://www.abortionpolicyapi.com">Abortion Policy API</a> at this time, but please check back later!
    </p>
  </div>
</template>

<script>
export default {
  props: [ 'data', 'selectedState' ],
  methods: {
    formatLMP() {
      switch(this.data?.banned_after_weeks_since_LMP) {
        case 99:
          return 'abortion is available until viability';
        case 28:
          return 'abortion is available until the third trimester'
        case 27:
          return 'abortion is available until 24 weeks post-implantation (27 weeks since last menstrual period)';
        case 22:
          return 'abortion is available until 20 weeks post-fertilization (22 weeks since last menstrual period)';
        case 0:
          return 'this state bans abortion after 0 weeks - it is effectively banned, save for some possible exceptions';
        default:
          if(this.data?.banned_after_weeks_since_LMP){
            return `abortion is available until ${this.data.banned_after_weeks_since_LMP} weeks since the last menstrual period`;
          } else {
            return false;
          }
      }
    },
    formatException() {
      switch(this.data?.exception_life) {
        case true:
          return 'abortion is not banned in this state if necessary to save the pregnant person\'s life';
        default:
          return false;
      }
    },
    formatHealth() {
      switch(this.data?.exception_health) {
        case 'Physical':
          return 'abortion is not banned if necessary to preserve the pregnant person\'s physical health (does not include mental health)';
        case 'Any':
          return 'abortion is not banned if necessary to preserve the pregnant person\'s health (which may include mental health)';
        case 'Major Bodily Function':
          return 'abortion is not banned if the pregnant person could suffer "substantial and irreversible impairment of a major bodily function"';
        default:
          return false;
      }
    },
    formatFetus() {
      switch(this.data?.exception_fetal) {
        case 'Serious fetal anomaly':
          return 'exceptions may be granted if the health or status of the fetus is serious (as opposed to fatal)';
        case 'Lethal fetal anomaly':
          return 'exceptions may be granted if the health or status of the fetus is fatal';
        default:
          return false;
      }
    },
    formatRape() {
      switch(this.data?.exception_rape_or_incest) {
        case true:
          return 'in this state, exceptions may be granted in cases of rape or incest.'
          case false:
            return 'this state does not grant exceptions in cases of rape or incest.';
        default:
          return false;
      }
    },
  }
}
</script>

<style>
.display-info-wrapper {
  font-weight: 300;
  font-size: 20px;
  color: #526488;
  padding-bottom: 15px;
  text-align: left;
  margin-top: 20px;
  height: 300px;
  max-width: 800px;
}
label {
  color: black;
  font-size: 16px;
}

@media only screen and (max-width: 520px) {
  .display-info-wrapper {
    height: 400px;
  }
}
</style>
