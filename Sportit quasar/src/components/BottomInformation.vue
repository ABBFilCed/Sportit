<template>
  <div style="background-color:dimgray; min-height: 130px; width: 100%;" class="row">
    <div class="col text-center text-white q-pt-md" style="font-size:3em">
      <q-btn flat round size="xl" type="a" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" icon="facebook"/>
      <q-btn flat round size="xl" type="a" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" icon="ion-logo-twitter"/>
      <q-btn flat round size="xl" type="a" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" icon="ion-logo-instagram"/>
      <q-btn flat round size="xl" type="a" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" icon="ion-logo-snapchat"/>
    </div><!--länkar till sociala medier-->
    <div class="col text-center q-pt-md" style="color:white">
        {{info.info1}}
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      info: {
        info1: 'Det är vi som är sportit och vi är såhär gamla nånting nånting info jadajada info hit info dit hejhejhejhjehjehjehjehjehjehjehjehjehjehjehjehjehjehjehjehjhjhej'
      }
    }
  }
}
</script>

<style>

</style>
