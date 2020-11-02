<template>
  <div
  class="row justify-center items-center"
  >
    <q-form class="column">
      <div class="row">
        <q-card square class="" style="width:450px;height:640px;">
          <q-card-section class="text-center" style="background-color: dodgerblue; height:150px">
            <q-img id="logo" src="../images/sportit-logga-jenny-liten.png" style="width:120px"></q-img>
            <q-btn icon="close" flat round dense v-close-popup class="absolute-top-right q-ma-sm" type="reset" />
          </q-card-section>
          <q-card-section>
            <q-form class="q-gutter-md">
              <q-input
               square
               clearable
               v-model="email"
               type="email"
               label="E-post"
               class="q-mt-md"
               lazy-rules
                :rules="[ val => val && val.length > 0 || 'Skriv in din e-post']"
               >
                <template v-slot:prepend>
                  <q-icon name="email" />
                </template>
              </q-input>
              <q-input
              square
              clearable
              v-model="password"
              type="password"
              label="Lösenord"
              lazy-rules
              :rules="[ val => !!value || 'Skriv ditt lösenord']"
              >
                <template v-slot:prepend>
                  <q-icon name="lock" />
                </template>
              </q-input>
            </q-form>
            <q-card-actions class="q-mt-lg">
              <q-btn
              unelevated
              size="lg"
              class="full-width text-white q-mt-lg"
              style="background-color:#404040;"
              label="Logga in"
              type="submit" />
              <q-btn
              size="lg"
              class="full-width q-mt-lg"
              outline
              color="#404040"
              label="Registrera dig"
              @click="register = true" />
            </q-card-actions>
          </q-card-section>
          <q-card-section class="text-center q-pa-sm">
            <p class="text-grey-6">Glömt lösenordet?</p>
          </q-card-section>
          <!-- <q-card-section>
            <div class="text-center q-pa-md q-gutter-md" style="margin-top:-50px">
              <q-btn round color="indigo-7">
                <q-icon name="fab fa-facebook-f" size="1.2rem" />
              </q-btn>
              <q-btn round color="red-8">
                <q-icon name="fab fa-google-plus-g" size="1.2rem" />
              </q-btn>
              <q-btn round color="light-blue-5">
                <q-icon name="fab fa-twitter" size="1.2rem" />
              </q-btn>
            </div>
          </q-card-section> -->
        </q-card>
      </div>
    </q-form>
    <q-dialog v-model="register" seamless>
      <registerComponent/>
    </q-dialog>
  </div>
</template>

<script>
import registerComponent from '../components/registerComponent.vue'
export default {
  components: {
    registerComponent
  },
  data () {
    return {
      email: '',
      password: '',
      register: false
    }
  }
}
</script>

<style>

</style>
