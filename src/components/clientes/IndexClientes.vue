<script setup>
    import { onMounted, ref } from "vue";
    import axios from 'axios'
    import { useRouter } from "vue-router";
    import Swal from "sweetalert2";
    
    const router = useRouter();

    let clientes = ref([])
    let searchClienteValue = ref([])

    onMounted(async () => {
        getClientes()
    })

    const getClientes = async () => {
        let response = await axios.get("http://localhost:8000/api/get_all_clientes")
        console.log('response', response);
        clientes.value = response.data.clientes
    }

    const searchCliente = async () => {
        let response = await axios.get('http://localhost:8000/api/search_clientes?s='+searchClienteValue.value)
        console.log('response', response.data.clientes);
        clientes.value = response.data.clientes;
    }

    const newCliente = () => {
        router.push('/clientes/new');
    }

    const deleteCliente = async (id) => {
        await axios.get('http://localhost:8000/api/delete_cliente/'+id)
        .then((response) => {
            Swal.fire({
                icon:"success",
                title:"Cliente eliminado"
            })
            getClientes()
        }).catch((response) => {
            console.log(response);
        })
    }

    const editCliente = (id) => {
        router.push('/clientes/edit/'+id);
    }

    const addClientes = () => {
        let object = { nombre: "Juan",  apellido: "Sevilla", celular: "999156552"}
        clientes.value.push(object)
    }
</script>
<template>
    <div class="container">
        <div class="row">
            <h1>Clientes</h1>
        </div>
        <div class="row">
            <div class="col mb-2">
                <button class="btn btn-primary" @click="newCliente()">Nuevo Cliente</button>
            </div>    
        </div>
        <div class="row">
            <form class="d-flex">
                <input class="form-control me-sm-2" v-model="searchClienteValue" @keyup="searchCliente()" type="search" placeholder="Buscar"/>
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
                            <th>Apellido</th>
                            <th>Numero</th>
                            <th>Correo</th>
                            <th>País</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="cliente in clientes" :key="cliente.id" v-if="clientes.length > 0">
                            <td>{{ cliente.id }}</td>
                            <td>{{ cliente.nombre }}</td>
                            <td>{{ cliente.apellido }}</td>
                            <td>{{ cliente.celular }}</td>
                            <td>{{ cliente.email }}</td>
                            <td v-if="cliente.pais">{{ cliente.pais.nombre }}</td><td v-else></td>
                            <td>
                                <button class="btn btn-success" @click="editCliente(cliente.id)">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                    </svg>
                                </button>
                                <button class="btn btn-danger mx-2" @click="deleteCliente(cliente.id)">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                                    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                                    </svg>
                                </button>
                            </td>
                        </tr>
                        <tr v-else>
                            <td>No hay clientes</td>
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