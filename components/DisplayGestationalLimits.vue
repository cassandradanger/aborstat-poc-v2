<template>
  <div>
    <p>banned after weeks since last menstrual period: {{ data.banned_after_weeks_since_LMP }}</p>
    <p>abortion is not banned if necessary to save the pregnant person's life: {{ data.exception_life }}</p>
    <p>if non-null, abortion is not banned if necessary to preserve the pregnant person's health: {{ data.exception_health }}</p>
    <p>in some states, exceptions may be granted based on the health or status of the fetus: {{ data.exception_fetal }}</p>
    <p>if true, exceptions may be granted in cases of rape or incest: {{ data.exception_rape_or_incest }}</p>
  </div>
</template>

<script>
export default {
  props: [ 'data' ],
}
</script>


<style>

</style>
