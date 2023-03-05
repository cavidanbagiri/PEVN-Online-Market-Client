
import { defineStore } from "pinia";
import axios from 'axios';

const productStore = defineStore('productStore',{

    // States
    state: () => ({
        product_data : {
            'name':'cavidan'
        }
    }),

    // Getters
    getters: {
        // Get Product Data
        GETPRODUCTDATA: (state) => state.product_data ,
    },

    // Actions
    actions:{
        async GETPRODUCTS(catalog_name) {

            axios.get(`http://localhost:3000/catalog/${catalog_name}`).
            then((respond)=>{
                this.product_data = respond.data;
                console.log(this.product_data);
            }).
            catch((err)=>{
                console.log('Get Product Error : ',err);
            })

        }
    }

});

export default productStore;
