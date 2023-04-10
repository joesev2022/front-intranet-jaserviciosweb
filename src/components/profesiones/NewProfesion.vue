<script setup>
import axios from 'axios';
import Swal from 'sweetalert2';
import { onMounted, ref } from 'vue';
import { useRouter } from "vue-router";

const router = useRouter();

let form = ref([]);

const onSave = async () => {
    const formData = new FormData();
    formData.append('nombre', form.value.nombre);
    /*for (const value of formData.values()) {
        console.log(value);    
    }*/
    await axios.post('http://localhost:8000/api/store_profesion', formData)
    .then((response) => {
        router.push('/profesiones');
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
            <h1>Nueva Profesión</h1>
        </div>
        <div class="row">
            <div class="col">
                <div class="card border-secondary mb-3">
                    <div class="card-header">Formulario de registro</div>
                    <div class="card-body">
                        <div class="form-group">
                            <label class="col-form-label mt-2" for="inputNombre">Nombre</label>
                            <input type="text" v-model="form.nombre" class="form-control" placeholder="Nombre" id="inputNombre">
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