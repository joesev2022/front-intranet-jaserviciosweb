<script setup>
import axios from 'axios';
import Swal from 'sweetalert2';
import { onMounted, ref } from 'vue';
import { useRouter } from "vue-router";

const router = useRouter();

let form = ref([]);

const onSave = async () => {
    const formData = new FormData();
    formData.append('titulo', form.value.titulo);
    formData.append('descripcion_corta', form.value.descripcion_corta);
    formData.append('descripcion', form.value.descripcion);
    /*for (const value of formData.values()) {
        console.log(value);    
    }*/
    await axios.post('http://localhost:8000/api/store_servicio', formData)
    .then((response) => {
        router.push('/servicios');
        Swal.fire({
            icon:"success",
            title:`${response.data.mensaje}`
        })
        console.log(response.data.servicio);
        console.log(response.data.mensaje);
    })
    .catch((error) => {
        console.log(error.response.data);
    })        
};

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
                            <input type="text" v-model="form.titulo" class="form-control" placeholder="Título" id="inputNombre">
                        </div>
                        <div class="form-group">
                            <label for="inputDescCorta" class="form-label mt-4">Descripción corta</label>
                            <input class="form-control" v-model="form.descripcion_corta" placeholder="Descripción corta" id="inputDescCorta" rows="3">
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