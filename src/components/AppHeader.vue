<template>
    <div class="ui secondary pointing menu">
        <router-link to="/" class="active item">
            Image Storage
        </router-link>
        <div class="right menu">
            <div v-if="isLoggedIn" class="horizontal">
                <router-link to="/" class="ui item">
                    Galleries
                </router-link>
                <router-link to="/upload" class="ui item">
                    Upload
                </router-link>
                <a href="#" class="ui item" @click="logout">
                    Logout
                </a>
            </div>
            <div v-else>
                <a href="#" class="ui item" @click="login">
                    Login
                </a>
            </div>
        </div>
        
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    name: 'AppHeader',
    methods: {
        ...mapActions(['login', 'logout']),
        // ...mapActions([])
    },
    computed: {
        ...mapGetters(['isLoggedIn']),
    }
}

// http://localhost:8080/#
// access_token=5ee3253784d69db6338327fba9c3e1c83c3ea5ce&expires_in=315360000&
// token_type=bearer&
// refresh_token=eacc80b95a358612a0574168ddbdcdc7faf205a7&account_username=ricardoMayo&
// account_id=53192237
</script>

<style scoped>
.horizontal {
    display: flex;
    flex-direction: row;
}
</style>

