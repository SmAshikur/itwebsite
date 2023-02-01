<template>
    <div class="">
       <headView></headView>
        <body class="page-index">
 
  
           
           <!-- End #main -->
            <!-- <homeView></homeView> -->
          
            <router-view/>
            <!-- ======= Footer ======= -->
            <!-- End Footer -->
             
            <!-- End Footer -->
          
            
              
          </body>
        <footView></footView>
    </div>
</template>
<script>
import headView from './head.vue'
import footView from './foot.vue' 
import homeView from '../pages/home.vue'
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
