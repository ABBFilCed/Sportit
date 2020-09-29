<template>
  <q-page
  class="window-height row justify-center items-center"
  >
    <div class="column q-pa-lg">
      <div class="row">
        <q-card square class="shadow-24" style="width:450px;height:550px;">
          <q-card-section class="bg-deep-purple-7 text-center">
            <q-icon class="text-white q-my-md q-pa-sm round" name="person" style="font-size:5em; border-radius:100px;"/>
          </q-card-section>
          <q-card-section>
            <q-form class="q-px-sm q-pt-xl">
              <q-input square clearable v-model="email" type="email" label="Email">
                <template v-slot:prepend>
                  <q-icon name="email" />
                </template>
              </q-input>
              <q-input square clearable v-model="password" type="password" label="Password">
                <template v-slot:prepend>
                  <q-icon name="lock" />
                </template>
              </q-input>
            </q-form>
            <q-card-actions class="q-px-lg">
            <q-btn unelevated size="lg" class="full-width text-white bg-deep-purple-7" label="Sign In" />
          </q-card-actions>
          </q-card-section>
          <q-card-section class="text-center q-pa-sm">
            <p class="text-grey-6">Forgot your password?</p>
            <p class="text-grey-6"> New here? Register</p>
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
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      username: '',
      password: ''
    }
  }
}
</script>

<style>

</style>
