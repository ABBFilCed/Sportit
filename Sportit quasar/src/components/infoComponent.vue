<template>
  <div class="q-pa-md q-gutter-sm" style="min-height:50px; max-height:500px; max-width: 50%px;">
    <q-editor v-model="info" min-height="5rem" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      info: ''
    }
  }
}
</script>

<style>

</style>
