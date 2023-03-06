
import { defineStore } from 'pinia';

const defaultStore = defineStore('defineStore', {

    state: () => ({

        user_teleport : false,

    }),

    getters:{
        GETUSERTELEPORT: (state) => state.user_teleport
    },

    actions:{
        // Toggle User Teleport
        TOGGLEUSERTELEPORT () {
            this.user_teleport = !this.user_teleport;
        }
    }

});


export default defaultStore;