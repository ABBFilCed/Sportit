<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar style="height: 100px; background-color: dodgerblue">

        <q-toolbar-title class="col">
          <router-link to="/">Sportit mc sport</router-link>
        </q-toolbar-title>

        <div class="col text-center row" style="list-style-type:none">
          <li class="col"><router-link to="/kontakt">Kontakt</router-link></li>
          <li class="col"><router-link to="/anlaggningar">Anläggningar</router-link></li>
          <li class="col"><router-link to="/klubben">För klubben</router-link></li>
          <li class="col"><router-link to="/login">Logga in</router-link></li>
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
  border-radius:10px
}
.router-link-active{
  background: #eee;
  color:dodgerblue
}
</style>
