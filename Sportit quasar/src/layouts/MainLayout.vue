<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar style="height: 100px; background-color: dodgerblue">

        <q-toolbar-title>
          Sportit mc sport
        </q-toolbar-title>

        <div>hej</div>
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
