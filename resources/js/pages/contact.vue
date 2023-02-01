<template>
  <main id="main">

      <!-- ======= Breadcrumbs ======= -->
      <div class="breadcrumbs d-flex align-items-center" style="background-image: url('assets/img/contact-header.jpg')">
        <div class="container position-relative d-flex flex-column align-items-center">
  
          <h2>Contact</h2>
          <ol>
            <li><a href="index.html">Home</a></li>
            <li>Contact</li>
          </ol>
  
        </div>
      </div><!-- End Breadcrumbs -->
  
      <!-- ======= Contact Section ======= -->
      <section id="contact" class="contact">
       
        <div class="container position-relative" data-aos="fade-up">
  
          <div class="row gy-4 d-flex justify-content-end">
  
            <div class="col-lg-5" data-aos="fade-up" data-aos-delay="100">
  
              <div class="info-item d-flex">
                <i class="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h4>Location:</h4>
                  <p>A108 Adam Street, New York, NY 535022</p>
                </div>
              </div><!-- End Info Item -->
  
              <div class="info-item d-flex">
                <i class="bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h4>Email:</h4>
                  <p>info@example.com</p>
                </div>
              </div><!-- End Info Item -->
  
              <div class="info-item d-flex">
                <i class="bi bi-phone flex-shrink-0"></i>
                <div>
                  <h4>Call:</h4>
                  <p>+1 5589 55488 55</p>
                </div>
              </div><!-- End Info Item -->
  
            </div>
  
            <div class="col-lg-6" data-aos="fade-up" data-aos-delay="250">
                <ContactForm></ContactForm>
            </div><!-- End Contact Form -->
  
          </div>
  
        </div>
      </section><!-- End Contact Section -->
  
    </main>
</template>
  <script>
    //import ContactForm form './form/contact.vue'
    import ContactForm from '../form/contact.vue'
    export default {
      components:{
        ContactForm,
      }
      // data () {
      //   return {
      //   senderName:'',
      //   success :false,
      //   form:{
      //     name: '',
      //     email: '',
      //     subject: '',
      //     message: '',
      //     },
        
      //   }
      // },
    
      // methods:{
      //    clear(){
      //     this.form.name= '',
      //     this.form.email= '',
      //     this.form.subject= '',
      //    this.form.message= ''
      //    },
      //    test(){
          
      //     axios.post('/api/contact',{
      //       name: this.form.name, 
      //       email: this.form.email, 
      //       subject: this.form.subject, 
      //       message: this.form.message, 
      //     })
      //     .then((response)=>{
      //       console.log(response)
      //       this.senderName=response.data.name
      //       this.success= true
      //       this.clear()
      //     })
      //    // console.log(this.form.name+" "+this.form.email+" "+this.form.subject+" "+this.form.message)
      //    }
      // }
    }
  </script>