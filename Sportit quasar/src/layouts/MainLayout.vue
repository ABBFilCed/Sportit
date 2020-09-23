<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar id="toolbar" style="background-color: dodgerblue; transition:0.8s;">
        <q-scroll-observer @scroll="onScroll"/>
        <q-toolbar-title class="">
          <router-link to="/" exact style="background-color:dodgerblue; margin-left:20px;"><q-img id="logo" src="../images/sportit-logga-jenny-liten.png" style="transition: 0.8s"></q-img></router-link>
        </q-toolbar-title><!-- länk till main sidan med logga -->

        <div class=" text-right row q-gutter-md" style="list-style-type:none">
          <li class="col"><router-link to="/kontakt" exact>Kontakt</router-link></li>
          <li class="col"><router-link to="/anlaggningar" exact>Anläggningar</router-link></li>
          <li class="col"><router-link to="/klubben" exact>  Klubben</router-link></li>
          <li class="col"><router-link to="/login" exact>Logga in</router-link></li>
        </div><!-- länkar till olika sidor -->
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',
  data () {

  },
  methods: {
    onScroll () {
      if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        document.getElementById('toolbar').style.padding = '5px'
        document.getElementById('logo').style.height = '40px'
        document.getElementById('logo').style.width = '40px'
      } else {
        document.getElementById('toolbar').style.padding = '10px'
        document.getElementById('logo').style.height = '130px'
        document.getElementById('logo').style.width = '130px'
      }
    }
  }// style="height: 115px; max-width: 115px"
}

</script>
<style>
li{
  display:inline-block;
  margin: 0 10px;
}
a{
  color:white;
  text-decoration: none;
  font-size: 20px;
  padding: 6px 8px;
  border-radius:10px;
  font-weight:bold;

}
.router-link-active{
  background: white;
  color:dodgerblue
}
</style>
