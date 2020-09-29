<template>
  <div>
    <log-in-component/>
    <bottom-information/>
  </div>
</template>

<script>
import BottomInformation from '../components/BottomInformation.vue'
import logInComponent from '../components/logInComponent.vue'
export default {
  name: 'Login',
  components: {
    BottomInformation,
    logInComponent
  }
}// importerat bottominformationcomponenten
</script>

<style>

</style>
