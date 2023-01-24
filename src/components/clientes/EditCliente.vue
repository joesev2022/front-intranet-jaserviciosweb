<script setup>
import axios from 'axios';
import Swal from 'sweetalert2';
import { ref, defineProps, onMounted } from 'vue';
import { useRouter } from 'vue-router';

let form = ref({
    id:''
});

const router = useRouter();

const props = defineProps({
    id: {
        type:String,
        default:''
    }
});

const getCliente = async () => {
    let response = await axios.get(`http://localhost:8000/api/edit_cliente/${props.id}`)
    console.log('cliente: ', response.data.cliente);
    form.value = response.data.cliente;
}

const onUpdate = async () => {
    const formData = new FormData();
    formData.append('nombre', form.value.nombre);
    formData.append('apellido', form.value.apellido);
    formData.append('celular', form.value.celular);
    formData.append('email', form.value.email);
    formData.append('direccion', form.value.direccion);
    formData.append('descripcion', form.value.descripcion);
    await axios.post(`http://localhost:8000/api/update_cliente/${form.value.id}`, formData)
    .then((response) => {
        router.push('/clientes');
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
}

onMounted(async () =>{
    getCliente()
});

</script>
<template>
    <div class="container">
        <div class="row">
            <h1>Editar Cliente</h1>
        </div>
        <div class="row">
            <div class="col">
                <div class="card border-secondary mb-3">
                    <div class="card-header">Formulario de edición</div>
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
                                <label class="col-form-label mt-2" for="inputDefault">E-mail</label>
                                <input type="text" v-model="form.email" class="form-control" placeholder="E-mail" id="inputDefault">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-form-label mt-2" for="inputDefault">Dirección</label>
                            <input type="text" v-model="form.direccion" class="form-control" placeholder="Dirección" id="inputDefault">
                        </div>
                        <div class="form-group">
                            <label for="exampleTextarea" class="form-label mt-4">Descripción</label>
                            <textarea class="form-control" v-model="form.descripcion" id="exampleTextarea" rows="3"></textarea>
                        </div>
                        <div class="d-grid gap-2">
                            <button class="btn btn-primary mt-2" type="submit" @click="onUpdate()">Actualizar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>    
</template>    
