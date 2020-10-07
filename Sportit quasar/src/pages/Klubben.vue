<template>
  <q-page>
    <q-card class="my-card">
      <q-parallax
        src="https://cdn.quasar.dev/img/parallax1.jpg"
        :height="150"
      />
    </q-card>
    <h1 class="text-center" style="margin-top:-20;">För klubben</h1>
    <hr style="width:85%;"/>
    <div class="q-mx-xl q-pa-xl text-center">
      <h3>Vill ni bli medlemmar i sportit?</h3>
      <p>{{lorem}}</p><br><br>
    </div>
    <div style="background-color:dodgerblue; color:white; width:100%;">
      <h3 class="text-center q-pt-md">Så här går ni till väga</h3>
      <div class="q-mx-xl q-px-xl text-center">
        <p>{{lorem}}</p><br><br>
      </div>
    </div>
    <div class="q-mx-xl q-pa-xl text-center">
      <h3>Få er egen sida</h3>
      <p>{{lorem}}</p><br><br>
    </div>
    <div style="max-width:30%; border-style:solid; margin-left:35%">
      <q-img src="../images/placeholder.png"/>
    </div>
    <div class="q-mx-xl q-pa-xl text-center">
      <h3>Funktioner </h3>
      <p>{{lorem}}</p><br><br>
    </div>
    <bottom-information></bottom-information>
  </q-page>
</template>

<script>
import BottomInformation from '../components/BottomInformation.vue'
export default {
  components: {
    BottomInformation
  },
  data () {
    return {
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus semper lacus diam, porta varius sapien posuere vitae. Donec aliquet tellus sem, vel tincidunt dolor posuere sed. Aliquam erat volutpat. Fusce volutpat lectus arcu. Nam eu libero nisi. Mauris ut augue in elit suscipit feugiat et vel metus. Aenean molestie tincidunt faucibus. Proin lobortis ex a nibh congue egestas. Cras ultricies sagittis est id tincidunt. Pellentesque faucibus egestas pellentesque. Suspendisse vitae urna non sapien convallis interdum. Morbi id diam eleifend, facilisis justo ac, egestas metus. Vivamus ut sagittis sem, quis commodo risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie felis tortor, ac pulvinar dui aliquam efficitur. Morbi ac arcu ac tortor convallis volutpat. Quisque cursus tristique orci, vel efficitur dolor ullamcorper eget. Donec et hendrerit dui, vel dictum tortor. Duis eget magna sapien. Mauris porta venenatis mauris, vel rhoncus orci euismod sit amet. Fusce varius enim a dui imperdiet varius. Maecenas augue mauris, bibendum at fermentum in, viverra ac ligula.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec in dictum magna, vitae auctor mi. Pellentesque id ullamcorper mauris. Ut vulputate, eros vitae vehicula elementum, ipsum urna auctor sem, aliquam cursus turpis ligula vel ipsum. Praesent tincidunt dui pellentesque nulla dignissim, vel eleifend risus suscipit. Sed non magna sem. Phasellus eu lacus nec ipsum molestie tincidunt. Fusce dignissim sed augue vel accumsan. Nam lacinia elit a augue ultrices maximus. Cras pellentesque rhoncus massa vitae ullamcorper.'
    }
  }
}// importerat bottominformationcomponenten
</script>

<style>

</style>
