
import { defineStore } from 'pinia';

const defaultStore = defineStore('defineStore', {

    state: () => ({

        user_teleport : false,
        canvas_toggle : false,
        user_dropdown_toggle : false

    }),

    getters:{
        GETUSERTELEPORT: (state) => state.user_teleport,
        GETCANVASTOGGLE: (state) => state.canvas_toggle,
        GETUSERDROPDOWN: (state) => state.user_dropdown_toggle,
    },

    actions:{

        // Toggle User Teleport
        TOGGLEUSERTELEPORT () {
            this.user_teleport = !this.user_teleport;
        },
        // Open and Close Canvas Toggle
        TOGGLECANVAS () {
            this.canvas_toggle = !this.canvas_toggle;
        },
        // Open And Close User Dropdown
        TOGGLEUSERDROPDOWN () {
            this.user_dropdown_toggle = !this.user_dropdown_toggle;
        }

    }

});


export default defaultStore;