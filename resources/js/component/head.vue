<template>
    <header id="header" class="header d-flex align-items-center fixed-top">
        <div class="container-fluid container-xl d-flex align-items-center justify-content-between">
    
          <a href="{{url('/')}}" class="logo d-flex align-items-center" style="text-decoration: none;">
            <!-- Uncomment the line below if you also wish to use an image logo -->
             <img src="assets/itlogo.jpeg" alt="" style="width:40px; height:40px"> 
            <h1 class="d-flex align-items-center mx-4">  Comfort IT Solution</h1>
          </a>
    
          <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
          <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
    
          <nav id="navbar" class="navbar p-0">
            <!-- <div id="nav">
                <router-link to="/">Home</router-link> |
                <router-link to="/about">About</router-link>
                <router-link to="/profile">Profile</router-link>
              </div> -->
            <ul class="p-0">
              <li> <router-link to="/">Home</router-link> </li>
              <li> <router-link to="/about">About</router-link> </li>
              <li class="dropdown"> <router-link to="/services">Services<i class="bi bi-chevron-down dropdown-indicator"></i></router-link>
                <ul>
                    <li class="dropdown"> <router-link to="/">Graphics Design<i class="bi bi-chevron-down dropdown-indicator"></i></router-link>
                        <ul>
                            <li> <router-link to="/">Logo Design.</router-link> </li>
                            <li> <router-link to="/">Website Template Design.</router-link> </li>
                            <li> <router-link to="/">Website Banner Design.</router-link> </li>
                            <li> <router-link to="/">Website/Facebook Poster Design.</router-link> </li>
                            <li> <router-link to="/">Facebook Cover Design.</router-link> </li>
                            <li> <router-link to="/">Ad Design.</router-link> </li>
                            <li> <router-link to="/">UI Design.</router-link> </li>
                            <li> <router-link to="/">Any other graphics designas per customer requirement.</router-link> </li>
                        </ul>
                    </li>
                    <li class="dropdown"> <router-link to="/services">Web Design<i class="bi bi-chevron-down dropdown-indicator"></i></router-link>
                        <ul>
                            <li> <router-link to="/">E-commerce website.</router-link> </li>
                            <li> <router-link to="/">Business website.</router-link> </li>
                            <li> <router-link to="/">Blog website.</router-link> </li>
                            <li> <router-link to="/">Portfolio website.</router-link> </li>
                            <li> <router-link to="/">Event website.</router-link> </li>
                            <li> <router-link to="/">Personal website.</router-link> </li>
                            <li> <router-link to="/">Membership website.</router-link> </li>
                            <li> <router-link to="/">Nonprofit website.</router-link> </li>
                        </ul>
                    </li>
                    <li class="dropdown"> <router-link to="/services">Web Development<i class="bi bi-chevron-down dropdown-indicator"></i></router-link>
                        <ul>
                            <li> <router-link to="/">Static website convert into dynamic</router-link> </li>
                            <li> <router-link to="/">Responsiveness for any device</router-link> </li>
                            <li> <router-link to="/">Backend/CMS Development</router-link> </li>
                            <li> <router-link to="/">API Development</router-link> </li>
                            <li> <router-link to="/">Multivendor / Single Vendor E-commerce</router-link> </li>
                        </ul>
                      </li>
                    <li> <router-link to="/">Digital Marketing</router-link> </li>
                    <li> <router-link to="/">Software Development</router-link> </li>
                    <li> <router-link to="/">IT Training</router-link> </li>
                    <li> <router-link to="/">IT Supports and Security System</router-link> </li>
                  </ul>
             </li>
              <li> <router-link to="/">Portfolio</router-link> </li>
              <li> <router-link to="/team">Team</router-link> </li>
              <li> <router-link to="/">Blog</router-link> </li>
              <li class="dropdown"><a href="#"><span>Dropdown</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
                <ul>
                  <li><a href="#">Dropdown 1</a></li>
                  <li class="dropdown"><a href="#"><span>Deep Dropdown</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
                    <ul>
                      <li><a href="#">Deep Dropdown 1</a></li>
                      <li><a href="#">Deep Dropdown 2</a></li>
                      <li><a href="#">Deep Dropdown 3</a></li>
                      <li><a href="#">Deep Dropdown 4</a></li>
                      <li><a href="#">Deep Dropdown 5</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Dropdown 2</a></li>
                  <li><a href="#">Dropdown 3</a></li>
                  <li><a href="#">Dropdown 4</a></li>
                </ul>
              </li>
              <li><a ><router-link to="/contacts">Contact</router-link></a></li>
              <!-- <li><router-link to="/">Home</router-link></li>
              <li><router-link to="/about"><button class="btn btn-success">About</button></router-link></li>
              <li><router-link to="/services">Services</router-link></li>
              <li><router-link to="/">Protfilio</router-link></li>
              <li><router-link to="/team">Team</router-link></li>
              <li><router-link to="/contact">Cotact</router-link></li> -->
            </ul>
          </nav><!-- .navbar -->
    
        </div>
      </header>
</template>
<script>
export default {
    setup() {
        
    },
}
</script>