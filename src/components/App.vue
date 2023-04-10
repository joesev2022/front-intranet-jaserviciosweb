<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">JA Servicios Web</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarColor03">
            <ul class="navbar-nav me-auto">
                <li class="nav-item">
                    <router-link class="nav-link" to="/">Inicio</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/servicios">Servicios</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/clientes">Clientes</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/proyectos">Proyectos</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/colaboradores">Colaboradores</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/profesiones">Profesiones</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="#">Tareas</router-link>
                </li>
                <!--<li class="nav-item">
                    <router-link class="nav-link" to="/acerca">Acerca de</router-link>
                </li>-->
                <!--<li class="nav-item">
                    <router-link class="nav-link" to="/contacto">Contacto</router-link>
                </li>-->
            </ul>
        </div>
    </div>
    </nav>
    <router-view class="pt-4"/>
</template>