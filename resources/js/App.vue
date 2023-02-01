<template>
    <div class="">
    
 
  
           
           <!-- End #main -->
            <!-- <homeView></homeView> -->
          
            <router-view/>
            <!-- ======= Footer ======= -->
            <!-- End Footer -->
             
            <!-- End Footer -->
             
            
              
        
    </div>
</template>
<script>
import headView from './component/head.vue'
import footView from './component/foot.vue'
import homeView from './pages/home.vue'
export default {
    components: {
        headView,
        footView,
        homeView,
    },
    setup() {
        
    },
}
</script>
