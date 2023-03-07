
import { defineStore } from "pinia";
import axios from 'axios';

const productStore = defineStore('productStore',{

    // States
    state: () => ({
        catalog_data : {
            'name':'cavidan'
        },
        product_data:{
            'product' : 'temp product'
        }
    }),

    // Getters
    getters: {
        // Get Product Data
        GETCATALOGDATA: (state) => state.catalog_data ,
        GETPRODUCTDATA: (state) => state.product_data
    },

    // Actions
    actions:{
        // Get Product According To Catalog Name
        async GETCATALOGPRODUCTS(catalog_name) {

            axios.get(`http://localhost:3000/catalog/${catalog_name}`).
            then((respond)=>{
                this.catalog_data = respond.data;
            }).
            catch((err)=>{
                console.log('Get Product Error : ',err);
            })
        },

        // Get Product With Id
        async GETPRODUCTWITHID(product_id) {
            axios.get(`http://localhost:3000/product/${product_id}`).
            then((respond)=>{
                this.product_data = respond.data;
            }).catch((err)=>{
                console.log('find product by id error : ',err);
            })
        }

    }

});

export default productStore;
