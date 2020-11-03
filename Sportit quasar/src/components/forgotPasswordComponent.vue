<template>
  <div
  class="row justify-center items-center"
  >
    <div class="column">
      <div class="row">
        <q-card square class="" style="width:450px;height:640px;">
          <q-card-section class="text-center" style=" height:230px;">
            <h4 style="">Glömt ditt lösenord?</h4>
            <q-btn type="reset" icon="arrow_back" flat round dense v-close-popup color="black" class="absolute-top-left q-ma-sm" />
            <p>Skriv in din e-post så och tryck skicka för att skicka återställningsguiden till din e-post. Följ sedan guiden för att återställa ditt lösenord.</p>
          </q-card-section>
          <q-card-section>
            <div class="q-gutter-md">
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
            </div>
            <q-card-actions class="q-mt-lg">
              <q-btn
              unelevated
              size="lg"
              class="full-width text-white q-mt-lg"
              style="background-color:#404040;"
              label="Skicka"
              />
            </q-card-actions>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: ''
    }
  }
}
</script>

<style>
</style>
