<!-- Sidebar.vue -->
<template>
  <ul class="sidebar navbar-nav">
    <li class="nav-item">
      <router-link to="/login" class="nav-link" exact>
        <i class="fas fa-sign-in-alt"></i>
        <span>Login</span>
      </router-link>
    </li>
    <li class="nav-item">
      <router-link to="/" class="nav-link" exact>
        <i class="fas fa-house-user"></i>
        <span>Homepage</span>
      </router-link>
    </li>
    <li class="nav-item">
      <router-link to="/crud" class="nav-link" exact>
        <i class="fas fa-users"></i>
        <span> Utenti</span>
      </router-link>
    </li>
    <li class="nav-item">
      <router-link to="/role" class="nav-link" exact>
        <i class="fas fa-users-cog"></i>
        <span> Ruoli</span>
      </router-link>
    </li>
    <li class="nav-item">
      <router-link to="/list" class="nav-link" exact>
        <i class="fas fa-list"></i>
        <span>Permessi</span>
      </router-link>
    </li>
  </ul>
</template>