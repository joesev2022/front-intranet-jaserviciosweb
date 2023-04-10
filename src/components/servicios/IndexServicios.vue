<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import axios from 'axios'

const router = useRouter();

let servicios = ref([])

const newServicio = () => {
        router.push('/servicios/new');
}

onMounted(async () => {
    getServicios()
})

const getServicios = async () => {
        let response = await axios.get("http://localhost:8000/api/get_all_servicios")
        console.log('response', response);
        servicios.value = response.data.servicios
}

</script>
<template>
    <div class="container">
        <div class="row">
            <h1>Servicios</h1>
        </div>
        <div class="row">
            <div class="col mb-2">
                <button class="btn btn-primary" @click="newServicio()">Nuevo Servicio</button>
            </div>    
        </div>
        <div class="row">
            <div v-for="servicio in servicios" :key="servicio.id" v-if="servicios.length > 0" class="card mx-2" style="width: 20rem; padding: 0;">
                <!--<img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp" class="card-img-top" alt="Fissure in Sandstone"/>-->
                <div class="card-body">
                    <h5 class="card-title">{{ servicio.titulo }}</h5>
                    <p class="card-text">{{ servicio.descripcion_corta }}</p>
                    <a href="#!" class="btn btn-success">Editar</a>
                </div>  
            </div>
            <div v-else>
                <p>No hay servicios</p>
            </div>
            <!--<div class="card" style="width: 20rem; padding: 0;">
            <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp" class="card-img-top" alt="Fissure in Sandstone"/>
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#!" class="btn btn-success">Editar</a>
            </div>  
            </div>-->
        </div>
    </div>
</template>