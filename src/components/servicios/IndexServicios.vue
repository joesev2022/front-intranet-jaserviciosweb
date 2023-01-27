<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const newServicio = () => {
        router.push('/servicios/new');
}

</script>
<template>
    <div class="container">
        <div class="row">
            <h1>Index Servicios</h1>
        </div>
        <div class="row">
            <div class="col mb-2">
                <button class="btn btn-primary" @click="newServicio()">Nuevo Servicio</button>
            </div>    
        </div>
        <div class="row">
            <div class="card" style="width: 20rem; padding: 0;">
            <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp" class="card-img-top" alt="Fissure in Sandstone"/>
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#!" class="btn btn-success">Editar</a>
            </div>
            </div>
        </div>
    </div>
</template>