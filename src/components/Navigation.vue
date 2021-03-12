<template>
    <div class="uk-container">
        <nav class="uk-navbar-container" uk-navbar>
        <div class="uk-navbar-left">
            <p class="text-gray-900 uk-navbar-item text-indigo-400 font-bold">MSUS.</p>
        </div>
        <div class="uk-navbar-right">
            <ul class="uk-navbar-nav">
                <li class="hover:bg-green-400">
                    <router-link :to="{name:'Home'}">Home</router-link>
                </li>
                <li class="hover:bg-green-400">
                    <router-link :to="{name:'Login'}" v-if="!isLogedIn">Login</router-link>
                </li>
                <li class="hover:bg-green-400">
                    <router-link :to="{name:'Register'}" v-if="!isLogedIn">Register</router-link>
                </li>
                <li class="hover:bg-green-400">
                    <router-link :to="{name:'Dashboard'}" v-if="isLogedIn">Dashboard</router-link>
                </li>
                <li class="hover:bg-green-400">
                    <a href="" @click.prevent="logout" v-if="isLogedIn">Log out</a>
                </li>
            </ul>
        </div>
    </nav>
    </div>
</template>

<script>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
    import User from '../apis/User';
export default {
    setup () {

        let router = useRouter();
        let store = useStore();
        let isLogedIn = computed(() => {
            return store.state.User.isLogIn;
        })

        
        let logout = () => {
            User.logout().then(() => {
                store.commit('removeAuth');
                router.push({name:'Home'});
            })
        }

        return {logout,isLogedIn}
    }
}
</script>

<style lang="scss" scoped>

</style>