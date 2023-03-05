
import { defineStore } from 'pinia';

const userStore = defineStore('UserStore',{

    // Create State
    state: () => ({
        user_data: {},
    }),

    // Create Getters 
    getters: {

    },

    // Create Actions
    actions: {
        // User Register
        async userLogin (sending_data) {
            console.log('sending data : ',sending_data);
        }
    }

});

export default userStore;