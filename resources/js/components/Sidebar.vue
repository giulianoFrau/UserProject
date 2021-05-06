<!-- Sidebar.vue -->
<template>
	<ul class="sidebar navbar-nav">
		<li class="nav-item">
            <router-link to="/" class="nav-link" exact>
                <i class="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard</span>
            </router-link>
        </li>
		<li class="nav-item">
            <router-link to="/list" class="nav-link" exact>
                <i class="fas fa-fw fa-chart-area"></i>
                <span>Lista Permessi</span>
            </router-link>
        </li>
        <li class="nav-item">
            <router-link to="/crud" class="nav-link" exact>
                <i class="fas fa-fw fa-chart-area"></i>
                <span>Crud App Utenti</span>
            </router-link>
        </li>
	</ul>
</template>