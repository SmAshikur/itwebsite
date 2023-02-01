<template>
    
  <div class="body">
    <div class="container-fluid fixed-top bg-primary py-3">
        <div class="row collapse show no-gutters d-flex h-100 position-relative">
            <div class="col-3 px-0 w-sidebar navbar-collapse collapse d-none d-md-flex">
                <!-- spacer col -->
            </div>
            <div class="col px-3 px-md-0">
                <!-- toggler -->
                <a data-toggle="collapse" href="#" data-target=".collapse" role="button" class="p-1">
                    <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
                </a>
            </div>
        </div>
    </div>
    <div class="container-fluid px-0 h-100">
        <div class="row vh-100 collapse show no-gutters d-flex h-100 position-relative">
            <div class="col-3 p-0 vh-100 h-100 text-white w-sidebar navbar-collapse collapse d-none d-md-flex sidebar">
                <!-- fixed sidebar -->
                <div class="navbar-dark bg-dark position-fixed h-100 w-sidebar">
                    <h6 class="px-3 pt-3">Fixed Menu</h6>
                    <ul class="nav flex-column flex-nowrap text-truncate">
                        <li class="nav-item">
                            <a class="nav-link active" href="#">Active</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col p-3">
                <h3>Content..</h3>
        
            </div>
        </div>
    </div>
  </div>
      
</template>


<style>
.body {
    height: 100vh;
    overflow-x: hidden;
    padding-top: 55px;
}

.w-sidebar {
    width: 200px;
    max-width: 200px;
}

.vh-100 {
    min-height: 100vh;
}

.row.collapse {
    margin-left: -200px;
    left: 0;
	transition: margin-left .15s linear;
}

.row.collapse.show {
    margin-left: 0 !important;
}

.row.collapsing {
    margin-left: -200px;
    left: -0.05%;
	transition: all .15s linear;
}

@media (max-width:768px) {

    .row.collapse,
    .row.collapsing {
        margin-left: 0 !important;
        left: 0 !important;
        overflow: visible;
    }
    
    .row > .sidebar.collapse {
        display: flex !important;
        margin-left: -100% !important;
        transition: all .3s linear;
        position: fixed;
        z-index: 1050;
        max-width: 0;
        min-width: 0;
        flex-basis: auto;
    }
    
    .row > .sidebar.collapse.show {
        margin-left: 0 !important;
        width: 100%;
        max-width: 100%;
        min-width: initial;
    }
    
    .row > .sidebar.collapsing {
        display: flex !important;
        margin-left: -10% !important;
        transition: all .3s linear !important;
        position: fixed;
        z-index: 1050;
        min-width: initial;
    }
    
}

</style>
 