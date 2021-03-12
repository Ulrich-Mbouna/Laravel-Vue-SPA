<template>
    <div class="uk-container uk-container-small ">
       <div class="bg-gray-100">
           <div class="uk-card uk-card-default uk-card-body">
               <h1 class="text-4xl">Hi vous etes Logezzzzz SUPER</h1>
               <h1>Hello  <span class="text-green-500">{{ user.name }}</span></h1>
               <p>Votre email est : <span class="text-indigo-500">{{ user.email }}</span></p>
           </div>
       </div>
    </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import User from '../apis/User';
export default {
    setup () {
        let user = ref({});

        onMounted(() => {
            User.auth().then((response) => {
                user.value = response.data;
            })
        })
        return {user}
    }
}
</script>

<style lang="scss" scoped>

</style>