<script setup>

import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import axios from 'axios'

let profesiones = ref([]);
let searchProfesionValue = ref([]);

const router = useRouter();

const newProfesion = () => {
        router.push('/profesiones/new');
}

const getProfesiones = async () => {
        let response = await axios.get("http://localhost:8000/api/get_all_profesiones")
        console.log('response', response);
        profesiones.value = response.data.profesiones
}

onMounted(async () => {
    getProfesiones()
});

</script>
<template>
    <div class="container">
        <div class="row">
            <h1>Profesiones</h1>
        </div>
        <div class="row">
            <div class="col mb-2">
                <button class="btn btn-primary" @click="newProfesion()">Nueva Profesión</button>
            </div>    
        </div>
        <div class="row">
            <form class="d-flex">
                <input class="form-control me-sm-2" v-model="searchProfesionValue" type="search" placeholder="Buscar"/>
                <!-- <button class="btn btn-secondary my-2 my-sm-0" type="submit">Buscar</button> -->
            </form>    
        </div>
        <div class="row">
            <div class="col  mt-2">
                <table class="table">
                    <thead class="table-light">
                        <tr>
                            <th>#</th>
                            <th>Nombre</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="profesion in profesiones" :key="profesion.id" v-if="profesiones.length > 0">
                            <td>{{ profesion.id }}</td>
                            <td>{{ profesion.nombre }}</td>
                            <td>
                                <button class="btn btn-success">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                    </svg>
                                </button>
                                <button class="btn btn-danger mx-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                                    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                                    </svg>
                                </button>
                            </td>
                        </tr>
                        <tr v-else>
                            <td>No hay profesiones</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <!--<div class="row">
            <div class="col">
                <button v-on:click="addClientes">Add 1</button>
            </div>
        </div>-->
    </div>
</template>