<template>
  <div
  class="row justify-center items-center"
  >
    <q-form @submit="register" class="column">
      <div class="row">
        <q-card square class="" style="width:450px;height:640px;">
          <q-card-section class="text-center" style=" height:150px;">
            <h4 style="">Registrera dig</h4>
            <q-btn type="reset" icon="arrow_back" flat round dense v-close-popup color="black" class="absolute-top-left q-ma-sm" />
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
              label="Upprepa lösenord"
              lazy-rules
              :rules="confirmPasswordRules"
              >
                <template v-slot:prepend>
                  <q-icon name="check" />
                </template>
              </q-input>
            </q-form>
            <div class="q-gutter-sm">
              <q-toggle
                v-model="disabled"
                label="Jag godkänner avtal och vilkor"
                color="primary"
              />
            </div>
            <q-card-actions class="q-mt-lg">
              <q-btn
              :disabled="disabled == false"
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
import { mapActions, mapGetters } from 'vuex'
import { db } from '../boot/firebase'
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      repassword: '',
      password: '',
      disabled: false,
      passwordRules: [
        (value) => !!value || 'Skriv ett lösenord',
        (value) => (value && value.length >= 8) || 'Lösenordet behöver vara minst 8 tecken'
      ],
      confirmPasswordRules: [
        (value) => !!value || 'Upprepa lösenordet',
        (value) =>
          value === this.password || 'Lösenorden matchar inte'
      ]
    }
  },
  computed: {
    ...mapGetters('auth', ['isAuthenticated']),
    ...mapGetters('user', ['currentUser'])
  },
  methods: {
    ...mapActions('auth', ['createNewUser']),
    register () {
      const user = { email: this.email, password: this.password, firstName: '', lastName: '' }
      console.log(user)
      console.log('bruh vi skappar ett konto')
      this.createNewUser(user)
        .then(u => {
          db.collection('users').doc(this.currentUser.id).set({
            qrUrl: 'https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=' + this.currentUser.id
          }, { merge: true })
          this.$router.push('/kontakt')
        })
        .catch(async (error) => {
          console.log(error)
        })
    }
  },
  beforeCreate () {
    if (this.isAuthenticated) {
      location.href = '/#/'
    }
  }
}
</script>

<style>
</style>
