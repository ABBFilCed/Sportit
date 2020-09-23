<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar style="height: 135px; background-color: dodgerblue">

        <q-toolbar-title class="">
          <router-link to="/" exact style="background-color:dodgerblue; margin-left:20px;"><q-img src="../images/sportit-logga-jenny-liten.png" style="height: 115px; max-width: 115px"></q-img></router-link>
        </q-toolbar-title>

        <div class=" text-right row q-gutter-md" style="list-style-type:none">
          <li class="col"><router-link to="/kontakt" exact>Kontakt</router-link></li>
          <li class="col"><router-link to="/anlaggningar" exact>Anläggningar</router-link></li>
          <li class="col"><router-link to="/klubben" exact>  Klubben</router-link></li>
          <li class="col"><router-link to="/login" exact>Logga in</router-link></li>
        </div>
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

  }
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
