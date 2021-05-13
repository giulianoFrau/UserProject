<template>
    <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        <a class="navbar-brand" >Pannello SuperUser</a>
   
        <form class="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
            <div class="input-group">
                <input class="form-control" type="text" placeholder="Cerca..." aria-label="Search" aria-describedby="basic-addon2" />
                <div class="input-group-append">
                    <button class="btn btn-primary" type="button"><i class="fas fa-search"></i></button>
                </div>
            </div>
        </form>
        <ul class="navbar-nav ml-auto ml-md-0">
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" id="userDropdown" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fas fa-bars"></i></a>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                    <a class="dropdown-item" target="_blank"  href="https://laravel.com/docs/8.x/installation">Laravel 8</a>
                    <a class="dropdown-item" target="_blank"  href="https://vuejs.org/v2/guide/">VUE</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" target="_blank" href="https://router.vuejs.org/">Vue Router</a>
                     <a class="dropdown-item" target="_blank"  href="https://getbootstrap.com/">Bootstrap</a>
                </div>
            </li>
        </ul>
    </nav>
</template>