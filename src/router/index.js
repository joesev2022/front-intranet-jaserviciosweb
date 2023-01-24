import { createRouter, createWebHistory } from "vue-router";

import Inicio from '../components/pages/Inicio.vue'
import Servicios from '../components/pages/Servicios.vue'
import Acerca from '../components/pages/Acerca.vue'
import IndexClientes from '../components/clientes/IndexClientes.vue'
import NewCliente from '../components/clientes/NewCliente.vue'
import EditCliente from '../components/clientes/EditCliente.vue'
import Error404 from '../components/Error404.vue'

const routes = [
    {
        path: '/',
        component: Inicio 
    },
    {
        path: '/acerca',
        component: Acerca 
    },
    {
        path: '/servicios',
        component: Servicios 
    },
    {
        path: '/clientes',
        component: IndexClientes 
    },
    {
        path: '/clientes/new',
        component: NewCliente 
    },
    {
        path: '/clientes/edit/:id',
        component: EditCliente,
        props: true
    },
    {
        path: '/:pathMatch(.*)*',
        component: Error404 
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router