<script setup>
import axios from 'axios';
import Swal from 'sweetalert2';
import { onMounted, ref } from 'vue';
import { useRouter } from "vue-router";

let form = ref([]);

</script>
<template>
    <div class="container">
        <div class="row">
            <h1>Nuevo Servicio</h1>
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
                        <div class="form-group">
                            <label for="inputDescCorta" class="form-label mt-4">Descripción corta</label>
                            <input class="form-control" v-model="form.descripcion_corta" placeholder="Descripción corta" id="inputDescCorta" rows="3">
                        </div>
                        <div class="form-group">
                            <label for="exampleTextarea" class="form-label mt-4">Descripción</label>
                            <textarea class="form-control" v-model="form.descripcion" id="exampleTextarea" rows="3"></textarea>
                        </div>
                        <div class="form-group">
                            <label for="inputImagen" class="form-label mt-4">Imagen</label>
                            <input class="form-control" type="file" id="inputImagen">
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