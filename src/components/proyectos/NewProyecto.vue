<script setup>
import axios from 'axios';
import Swal from 'sweetalert2';
import { onMounted, ref } from 'vue';
import { useRouter } from "vue-router";
import Multiselect from '@vueform/multiselect';

let form = ref([]);
let cliente_id = ref([]);
let options = ref([]);
let value = ref([]);

onMounted(async () => {
    options.value.push('Diseño Web');
    options.value.push('Desarrollo Web');
    options.value.push('SEO');
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
                            <input type="text" v-model="form.nombre" class="form-control" placeholder="Título" id="inputNombre">
                        </div>
                        <div class="row">
                            <div class="col">
                                <label class="col-form-label mt-2" for="inputPais">Cliente</label>
                                <select class="form-select" id="exampleSelect1" v-model="cliente_id">
                                    <option disabled>Seleccionar Cliente</option>
                                </select>
                            </div>
                            <div class="col">
                                <div>
                                    <label class="col-form-label mt-2" for="inputPais">Servicios</label>
                                    <Multiselect v-model="value" mode="tags" :searchable="true" :options="options" :close-on-select="false"/>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="exampleTextarea" class="form-label mt-4">Descripción</label>
                            <textarea class="form-control" v-model="form.descripcion" id="exampleTextarea" rows="3"></textarea>
                        </div>
                        <div class="d-grid gap-2">
                            <button class="btn btn-primary mt-2" type="submit">Agregar</button>
                        </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
</template>