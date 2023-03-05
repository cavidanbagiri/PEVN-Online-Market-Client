
import { defineStore } from 'pinia';

import axios from 'axios';

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

            await axios.post('http://localhost:3000/user/login',sending_data).
            then((respond)=>{
                console.log('repsond is : ',respond);
                this.user_data = respond;
            }).catch((err)=>{
                console.log('Axios User Login Error : ', err);
            })

        }
    }

});

export default userStore;