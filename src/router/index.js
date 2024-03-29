import { createRouter, createWebHistory } from "vue-router";

import Inicio from '../components/pages/Inicio.vue'
import Servicios from '../components/pages/Servicios.vue'
import Acerca from '../components/pages/Acerca.vue'
import IndexProyectos from '../components/proyectos/IndexProyectos.vue'
import NewProyecto from '../components/proyectos/NewProyecto.vue'
import IndexServicios from '../components/servicios/IndexServicios.vue'
import NewServicio from '../components/servicios/NewServicio.vue'
import IndexClientes from '../components/clientes/IndexClientes.vue'
import NewCliente from '../components/clientes/NewCliente.vue'
import EditCliente from '../components/clientes/EditCliente.vue'
import IndexProfesiones from '../components/profesiones/IndexProfesiones.vue'
import NewProfesion from '../components/profesiones/NewProfesion.vue'
import IndexColaboradores from '../components/colaboradores/IndexColaboradores.vue'
import NewColaborador from '../components/colaboradores/NewColaborador.vue'
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
        path: '/proyectos',
        component: IndexProyectos 
    },
    {
        path: '/proyectos/new',
        component: NewProyecto 
    },
    {
        path: '/servicios',
        component: IndexServicios 
    },
    {
        path: '/servicios/new',
        component: NewServicio 
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
        path: '/profesiones',
        component: IndexProfesiones 
    },
    {
        path: '/profesiones/new',
        component: NewProfesion 
    },
    {
        path: '/colaboradores',
        component: IndexColaboradores 
    },
    {
        path: '/colaboradores/new',
        component: NewColaborador
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