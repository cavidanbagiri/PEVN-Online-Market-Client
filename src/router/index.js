
import { createRouter, createWebHistory } from 'vue-router';

const HomePage = () => import('../views/Home_Page.vue');
const ProductItemPage = () => import('../views/Product_Item_Page.vue');
const FavoritesPage = () => import('../views/Favorites_Page.vue');
const ProductsPage = () => import('../views/Products_Page.vue');

const router = createRouter({

    history: createWebHistory(),

    routes:[
        {path:'/', name:'HomePage', component:HomePage},
        {path:'/favorites', name:'FavoritesPage', component:FavoritesPage},
        {path:'/product/:id', name:'ProductItemPage', component:ProductItemPage},
        {path:'/catalog/:catalog_name', name:'ProductsPage', component:ProductsPage},
    ]    

})


export default router;