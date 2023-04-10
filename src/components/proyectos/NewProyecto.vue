<script setup>
import axios from 'axios';
import Swal from 'sweetalert2';
import { onMounted, ref } from 'vue';
import { useRouter } from "vue-router";
import Multiselect from '@vueform/multiselect';

let form = ref([]);
let cliente_id = ref([]);
let servicio_id = ref([]);
let clientes = ref([]);
let servicios = ref([]);
let options = ref([]);
let colaborador_id = ref([]);

const onSave = () => {
    console.log(form.value.titulo);
    console.log(form.value.fechaInicio);
    console.log(form.value.fechaFin);
    console.log('Cliente: ', cliente_id.value);
    console.log('Servicio: ', servicio_id.value);
    console.log('Colaboradores: ', colaborador_id.value);
    console.log(form.value.descripcion);
}

const getClientes = async () => {
    let response = await axios.get('http://localhost:8000/api/get_all_clientes');
    clientes.value = response.data.clientes;
};

const getServicios = async () => {
    let response = await axios.get('http://localhost:8000/api/get_all_servicios');
    servicios.value = response.data.servicios;
};

onMounted(async () => {
    getClientes()
    getServicios()
    options.value.push('Javier - Font End - Semi Senior');
    options.value.push('Nicolas - Font End - Junior');
    options.value.push('Luis - Back End - Senior');
    options.value.push('Martin - QA Tester - Junior');
});
</script>
<template>
    <div class="container">
        <div class="row">
            <h1>Nuevo Proyecto</h1>
        </div>
        <div class="row">
            <div class="col">
                <div class="card border-secondary mb-3">
                    <div class="card-header">Formulario de registro</div>
                    <div class="card-body">
                        <div class="form-group">
                            <label class="col-form-label mt-2" for="inputNombre">Título</label>
                            <input type="text" v-model="form.titulo" class="form-control" placeholder="Título" id="inputNombre">
                        </div>
                        <div class="row">
                            <div class="col">
                                <div>
                                    <label class="col-form-label mt-2" for="inputPais">Fecha inicio</label>
                                    <div class="input-group date" id="datetimepicker" data-target-input="nearest">
                                        <input type="date" class="form-control datetimepicker-input" data-target="#datetimepicker" v-model="form.fechaInicio" />
                                    </div>                                                                      
                                </div>
                            </div>
                            <div class="col">
                                <div>
                                    <label class="col-form-label mt-2" for="inputPais">Fecha fin</label>
                                    <div class="input-group date" id="datetimepicker" data-target-input="nearest">
                                        <input type="date" class="form-control datetimepicker-input" data-target="#datetimepicker" v-model="form.fechaFin" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <label class="col-form-label mt-2" for="inputPais">Cliente</label>
                                <select class="form-select" id="exampleSelect1" v-model="cliente_id">
                                    <option disabled>Seleccionar Cliente</option>
                                    <option :value="cliente.id" v-for="cliente in clientes" :key="cliente.id">
                                        {{ cliente.nombre }}
                                    </option>
                                </select>
                            </div>
                            <div class="col">
                                <div>
                                    <label class="col-form-label mt-2" for="inputPais">Servicios</label>
                                    <select class="form-select" id="exampleSelect2" v-model="servicio_id">
                                        <option disabled>Seleccionar Servicio</option>
                                        <option :value="servicio.id" v-for="servicio in servicios" :key="servicio.id">
                                            {{ servicio.titulo }}
                                        </option>
                                    </select>
                                    <!--<Multiselect v-model="value" mode="tags" :searchable="true" :options="options" :close-on-select="false"/>-->
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <label class="col-form-label mt-2" for="inputPais">Colaboradores</label>
                                <Multiselect v-model="colaborador_id" mode="tags" :searchable="true" :options="options" :close-on-select="false"/>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="exampleTextarea" class="form-label mt-4">Descripción</label>
                            <textarea class="form-control" v-model="form.descripcion" id="exampleTextarea" rows="3"></textarea>
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