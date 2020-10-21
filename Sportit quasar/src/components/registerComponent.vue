<template>
  <div
  class="row justify-center items-center"
  >
    <q-form class="column">
      <div class="row">
        <q-card square class="" style="width:450px;height:640px;">
          <q-card-section class="text-center" style="background-color: dodgerblue; height:150px; color:white;">
            <h3 style="">Registrera dig</h3>
            <q-btn type="reset" icon="arrow_back" flat round dense v-close-popup color="black" class="absolute-top-left q-ma-sm" />
          </q-card-section>
          <q-card-section>
            <q-form class="q-gutter-md">
              <q-input
              square
              clearable
              v-model="email"
              type="email"
              label="Email"
              class="q-mt-md"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Skriv något']"
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
              label="password"
              class="q-mt-md"
              lazy-rules
              :rules="passwordRules"
              >
                <template v-slot:prepend>
                  <q-icon name="lock" />
                </template>
              </q-input>
              <q-input
              square
              clearable
              v-model="repassword"
              type="password"
              label="confirm password"
              lazy-rules
              :rules="confirmPasswordRules"
              >
                <template v-slot:prepend>
                  <q-icon name="check" />
                </template>
              </q-input>
            </q-form>
            <div class="q-gutter-sm">
              <q-toggle v-model="agreement" label="Jag godkänner Avtal och villkor" class="q-mt-md"/>
            </div>
            <q-card-actions class="q-mt-lg">
              <q-btn
              unelevated
              size="lg"
              class="full-width text-white q-mt-lg"
              style="background-color:#404040;"
              label="Kom igång!"
              type="submit"
              />
            </q-card-actions>
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
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      repassword: '',
      password: '',
      agreement: false,
      passwordRules: [
        (value) => !!value || 'Please type password.',
        (value) => (value && value.length >= 6) || 'minimum 6 characters'
      ],
      confirmPasswordRules: [
        (value) => !!value || 'type confirm password',
        (value) =>
          value === this.password || 'The password confirmation does not match.'
      ]
    }
  },
  methods: {
    onSubmit () {
      if (this.agreement !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'Acceptera vilkor för att skapa konto'
        })
      }
    }
  }
}
</script>

<style>
</style>
