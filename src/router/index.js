
import { createRouter, createWebHistory } from 'vue-router';

const HomePage = () => import('../views/HomeView.vue');
const ProductItemPage = () => import('../views/ProductItemPage.vue');
const FavoritesPage = () => import('../views/FavoritesPage.vue');

const router = createRouter({

    history: createWebHistory(),

    routes:[
        {path:'/', name:'HomePage', component:HomePage},
        {path:'/productitem', name:'ProductItemPage', component:ProductItemPage},
        {path:'/favorites', name:'FavoritesPage', component:FavoritesPage},
    ]    

})


export default router;