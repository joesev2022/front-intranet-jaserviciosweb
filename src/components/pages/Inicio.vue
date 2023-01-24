<script setup>
import { useRouter } from "vue-router";
    
const router = useRouter();

const verClientes = () => {
    router.push('/clientes');
}
</script>
<template>
    <div class="container">
        <div class="row">
            <h1>Bienvenido a JA Servicios Web</h1>
        </div>
        <div class="row">
            <div class="col">
                <div class="card text-white bg-primary mb-3">
                <div class="card-header">Header</div>
                <div class="card-body">
                    <h4 class="card-title">Primary card title</h4>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="card text-white bg-success mb-3">
                <div class="card-header">Header</div>
                <div class="card-body">
                    <h4 class="card-title">Success card title</h4>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card text-white bg-dark mb-3">
                <div class="card-header">Novedades de clientes</div>
                <div class="card-body">
                    <h4 class="card-title">Visualización de datos de los clientes</h4>
                    <p class="card-text">Aquí podrás acceder a la información de los clientes y agregar nuevos. Su finalidad es hacer seguimiento de los datos de cada uno.</p>
                    <button class="btn btn-primary" @click="verClientes()">Ver clientes</button>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>