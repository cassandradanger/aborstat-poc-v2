<template>
  <div class="display-info-wrapper">
    <ul>
      <li>banned after weeks since last menstrual period: {{ data.banned_after_weeks_since_LMP }}</li>
      <li>abortion is not banned if necessary to save the pregnant person's life: {{ data.exception_life }}</li>
      <li>if non-null, abortion is not banned if necessary to preserve the pregnant person's health: {{ data.exception_health }}</li>
      <li>in some states, exceptions may be granted based on the health or status of the fetus: {{ data.exception_fetal }}</li>
      <li>if true, exceptions may be granted in cases of rape or incest: {{ data.exception_rape_or_incest }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: [ 'data' ],
}
</script>

<style>
.display-info-wrapper {
  font-weight: 300;
  font-size: 20px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
  text-align: left;
  margin-top: 20px;
}
ul {
  width: 90%;
  margin: 0 auto;
}
</style>
