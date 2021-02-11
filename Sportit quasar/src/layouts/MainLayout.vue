<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar id="toolbar" class="row" style="padding:10px; background-color:dodgerblue;">
        <!-- <q-scroll-observer @scroll="onScroll"/> -->
        <div class="row justify-end">
          <q-toolbar-title  class="col">
            <!-- <router-link to="/" exact style="background-color:dodgerblue; margin-left:15px; margin-top:15px; margin-bottom:15px;"><q-img id="logo" src="../images/logo.jpg" width="50px" height="50px"></q-img></router-link> -->
          </q-toolbar-title><!-- länk till main sidan med logga -->

          <div class=" justify-end" style="list-style-type:none">
            <li class="col-xs-2 col"><router-link to="/" exact style="background-color:dodgerblue; margin-top:15px; margin-bottom:15px;"><q-img id="logo" src="../images/logo.jpg" width="50px" height="50px"></q-img></router-link></li>
            <li class="col-xs-2 col"><router-link to="/kontakt" exact>KONTAKT</router-link></li>
            <li class="col-xs-2 col"><router-link to="/klubben" exact>KLUBBEN</router-link></li>
            <li class="col-xs-2 col"><router-link to="/anlaggningar" exact> ANLÄGGNINGAR </router-link></li>
            <q-btn flat no-caps style="font-size: 15px; font-weight:bold; margin:0px 5px;  margin-bottom: 5px;" :ripple="false" class="col-xs-2 col" label="LOGGA IN" color="" @click="login = true" />
          </div><!-- länkar till olika sidor -->
        </div>
      </q-toolbar>
    </q-header>
    <div>
      <q-dialog v-model="login">
        <log-in-component/>
      </q-dialog>
    </div>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import logInComponent from '../components/logInComponent.vue'
export default {
  name: 'MainLayout',
  components: {
    logInComponent
  },
  data () {
    return {
      login: false
    }
  },
  methods: {
    onScroll () {
      if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        document.getElementById('toolbar').style.padding = '5px'
        document.getElementById('logo').style.height = '50px'
        document.getElementById('logo').style.width = '50px'
      } else {
        document.getElementById('toolbar').style.padding = '10px'
        document.getElementById('logo').style.height = '80px'
        document.getElementById('logo').style.width = '80px'
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
  font-size: 15px;
  padding: 6px 8px;
  border-radius:10px;
  font-weight:bold;

}
.router-link-active{
  background: rgb(27, 120, 255);
  color:white;
}
</style>
