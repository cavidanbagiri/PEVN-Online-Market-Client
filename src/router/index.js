
import { createRouter, createWebHistory } from 'vue-router';

const HomePage = () => import('../views/HomeView.vue');
const ProductItemPage = () => import('../views/ProductItemPage.vue');
const FavoritesPage = () => import('../views/FavoritesPage.vue');
const ProductsPage = () => import('../views/ProductsPage.vue');

const router = createRouter({

    history: createWebHistory(),

    routes:[
        {path:'/', name:'HomePage', component:HomePage},
        {path:'/favorites', name:'FavoritesPage', component:FavoritesPage},
        {path:'/productitem/:id', name:'ProductItemPage', component:ProductItemPage},
        {path:'/catalog/:catalog_name', name:'ProductsPage', component:ProductsPage},
    ]    

})


export default router;