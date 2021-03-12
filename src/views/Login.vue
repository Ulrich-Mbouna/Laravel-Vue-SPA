<template>
    <div class="uk-container uk-conatiner-small">
        <div class="font-sans">
        <div
          class="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100">
          <div class="relative sm:max-w-sm w-full">
              <div class="card bg-blue-400 shadow-lg w-full h-full rounded-3xl absolute transform -rotate-6" ></div>
              <div class="card bg-red-400 shadow-lg w-full h-full rounded-3xl absolute transform rotate-6"></div>
              <div class="relative w-full rounded-3xl px-6 py-4 bg-gray-100 shadow-md">
              <label
                for=""
                class="block text-sm text-gray-700 text-center font-semibold"
              >
                Login
              </label>
              <form method="#" action="#" class="mt-10">
                
                <div class="mt-7">
                  <input
                    v-model="form.email"
                    type="email"
                    placeholder="Email"
                    class=" focus:outline-none p-2 mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                  />
                  <span class="text-red-500 italic font-bold" v-if="errors.email">{{ errors.email[0] }}</span>
                </div>

                <div class="mt-7">
                  <input
                    v-model="form.password"
                    type="password"
                    placeholder="Password"
                    class=" focus:outline-none p-2 mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                  />
                  <span class="text-red-500 italic font-bold" v-if="errors.password">{{ errors.password[0] }}</span>
                </div>

                <div class="mt-7">
                  <button
                  @click.prevent="login"
                    class="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
                  >
                    Login
                  </button>
                </div>

                <div class="flex mt-7 items-center text-center">
                  <hr class="border-gray-300 border-1 w-full rounded-md" />
                  <label class="block font-medium text-sm text-gray-700 w-full">
                    Login With
                  </label>
                  <hr class="border-gray-300 border-1 w-full rounded-md" />
                </div>

                <div class="flex mt-7 justify-center w-full">
                  <button
                    class="mr-5 bg-blue-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
                  >
                    Facebook
                  </button>

                  <button
                    class="bg-red-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
                  >
                    Google
                  </button>
                </div>

                <div class="mt-7">
                  <div class="flex justify-center items-center">
                    <label class="w-full text-sm text-gray-600"
                      >Pas de compte ?</label
                    >
                    <a
                      href="#"
                      class="w-full text-blue-500 transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
                    >
                      Register
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { reactive, ref } from "vue";
import User from '../apis/User';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default {
    setup () {
        // Data
        let router = useRouter();
        let errors = ref({});
        let store = useStore();
        
        //Fonction
        let form = reactive({
          email:'',
          password: ''
        });
        
        let login = () => {
          User.login(form).then(() => {
            console.log(store);
            store.commit('setAuth');
            router.push({name:'Dashboard'})
          }).catch(error => {
              if(error.response.status === 422) {
                errors.value = error.response.data.errors
              }
          })
        }

        return {form,login,errors}
    }
}
</script>

<style lang="scss" scoped>

</style>