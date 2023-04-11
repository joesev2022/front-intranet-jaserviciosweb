<script setup>
import axios from 'axios';
import Swal from 'sweetalert2';
import { onMounted, ref } from 'vue';
import { useRouter } from "vue-router";

const router = useRouter();

let form = ref([]);
let pais_id = ref([]);
let nivel_id = ref([]);
let profesion_id = ref([]);
let tipo_colaborador_id = ref([]);
let paises = ref([]);
let niveles = ref([]);
let profesiones = ref([]);
let tipoColaboradores = ref([]);

const getPaises = async () => {
    let response = await axios.get('http://localhost:8000/api/get_all_paises');
    paises.value = response.data.paises;
};

const getNiveles = async () => {
    let response = await axios.get('http://localhost:8000/api/get_all_niveles');
    niveles.value = response.data.niveles;
};

const getProfresiones = async () => {
    let response = await axios.get('http://localhost:8000/api/get_all_profesiones');
    profesiones.value = response.data.profesiones;
};

const getTipoColaboradores = async () => {
    let response = await axios.get('http://localhost:8000/api/get_all_tipo_colaboradores');
    tipoColaboradores.value = response.data.tipoColaboradores;
};

const onSave = async () => {
    const formData = new FormData();
    formData.append('nombre', form.value.nombre);
    formData.append('apellido', form.value.apellido);
    formData.append('celular', form.value.celular);
    formData.append('email', form.value.email);
    formData.append('pais_id', pais_id.value);
    formData.append('direccion', form.value.direccion);
    formData.append('nivel_id', nivel_id.value);
    formData.append('profesion_id', profesion_id.value);
    formData.append('tipo_colaborador_id', tipo_colaborador_id.value);
    /*for (const value of formData.values()) {
        console.log(value);    
    }*/
    await axios.post('http://localhost:8000/api/store_colaborador', formData)
    .then((response) => {
        router.push('/colaboradores');
        Swal.fire({
            icon:"success",
            title:`${response.data.mensaje}`
        })
        console.log(response.data.cliente);
        console.log(response.data.mensaje);
    })
    .catch((response) => {
        console.log(response);
    })        
};

onMounted(async () => {
    getPaises(),
    getNiveles(),
    getProfresiones(),
    getTipoColaboradores()
});

</script>
<template>
    <div class="container">
        <div class="row">
            <h1>Nuevo Colaborador</h1>
        </div>
        <div class="row">
            <div class="col">
                <div class="card border-secondary mb-3">
                    <div class="card-header">Formulario de registro</div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col">
                                <label class="col-form-label mt-2" for="inputNombre">Nombre</label>
                                <input type="text" v-model="form.nombre" class="form-control" placeholder="Nombre" id="inputNombre">
                            </div>
                            <div class="col">
                                <label class="col-form-label mt-2" for="inputApellido">Apellido</label>
                                <input type="text" v-model="form.apellido" class="form-control" placeholder="Apellido" id="inputApellido">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <label class="col-form-label mt-2" for="inputCelular">Celular</label>
                                <input type="text" v-model="form.celular" class="form-control" placeholder="Celular" id="inputCelular">
                            </div>
                            <div class="col">
                                <label class="col-form-label mt-2" for="inputEmail">E-mail</label>
                                <input type="text" v-model="form.email" class="form-control" placeholder="E-mail" id="inputEmail">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <label class="col-form-label mt-2" for="inputPais">País</label>
                                <select class="form-select" id="exampleSelect1" v-model="pais_id">
                                    <option disabled>Seleccionar País</option>
                                    <option :value="pais.id" v-for="pais in paises" :key="pais.id">
                                        {{ pais.nombre }}
                                    </option>
                                </select>
                            </div>
                            <div class="col">
                                <label class="col-form-label mt-2" for="inputDefault">Dirección</label>
                                <input type="text" v-model="form.direccion" class="form-control" placeholder="Dirección" id="inputDefault">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <label class="col-form-label mt-2" for="inputPais">Profesion</label>
                                <select class="form-select" id="exampleSelect1" v-model="profesion_id">
                                    <option disabled>Seleccionar Profesión</option>
                                    <option :value="profesion.id" v-for="profesion in profesiones" :key="profesion.id">
                                        {{ profesion.nombre }}
                                    </option>
                                </select>
                            </div>
                            <div class="col">
                                <label class="col-form-label mt-2" for="inputPais">Nivel</label>
                                <select class="form-select" id="exampleSelect1" v-model="nivel_id">
                                    <option disabled>Seleccionar Nivel</option>
                                    <option :value="nivel.id" v-for="nivel in niveles" :key="nivel.id">
                                        {{ nivel.nombre }}
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <label class="col-form-label mt-2" for="inputPais">Tipo Colaborador</label>
                                <select class="form-select" id="exampleSelect1" v-model="tipo_colaborador_id">
                                    <option disabled>Seleccionar Colaborador</option>
                                    <option :value="tipoColaborador.id" v-for="tipoColaborador in tipoColaboradores" :key="tipoColaborador.id">
                                        {{ tipoColaborador.nombre }}
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div class="d-grid gap-2">
                            <button class="btn btn-primary mt-2" type="submit" @click="onSave()">Agregar</button>
                        </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
</template>    