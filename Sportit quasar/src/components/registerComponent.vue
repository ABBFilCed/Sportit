<template>
  <div
  class="row justify-center items-center"
  >
    <div class="column">
      <div class="row">
        <q-card square class="" style="width:450px;height:640px;">
          <q-card-section class="text-center" style="background-color: dodgerblue; height:150px; color:white;">
            <h3 style="">Registrera dig</h3>
          </q-card-section>
          <q-card-section>
            <q-form class="q-gutter-md">
              <q-input square clearable v-model="email" type="email" label="Email" class="q-mt-md">
                <template v-slot:prepend>
                  <q-icon name="email" />
                </template>
              </q-input>
              <q-input square clearable v-model="username" type="username" label="Username" class="q-mt-md">
                <template v-slot:prepend>
                  <q-icon name="person" />
                </template>
              </q-input>
              <q-input square clearable v-model="password" type="password" label="password">
                <template v-slot:prepend>
                  <q-icon name="lock" />
                </template>
              </q-input>
            </q-form>
            <div class="q-gutter-sm">
              <q-checkbox v-model="agreement" label="Jag godkänner Avtal och villkor" class="q-mt-md"/>
            </div>
            <q-card-actions class="q-mt-lg">
              <q-btn unelevated size="lg" class="full-width text-white q-mt-lg" style="background-color:#404040;" label="Kom igång!" />
            </q-card-actions>
          </q-card-section>
          <q-card-section>
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
      email: '',
      username: '',
      password: '',
      agreement: false
    }
  }
}
</script>

<style>
</style>
