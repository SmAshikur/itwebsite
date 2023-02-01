<template>
    <div v-if="success" class="alert bg-light alert-primary alert-dismissible fade show " role="alert">
        <strong>Hello {{senderName}} !</strong>  You Messaged Successfully  !
        <button type="button" class="btn-close" data-bs-dismiss="alert"   @click="success=false"></button>
      </div>
      <form action="" method="post" role="form" class="php-email-form" @submit.prevent="test" >
        <div class="row">
          <div class="col-md-6 form-group">
            <input type="text" v-model="form.name" name="name" class="form-control" id="name" placeholder="Your Name" required>
          </div>
          <div class="col-md-6 form-group mt-3 mt-md-0">
            <input type="email" v-model="form.email" class="form-control" name="email" id="email" placeholder="Your Email" required>
          </div>
        </div>
        <div class="form-group mt-3">
          <input type="text" v-model="form.subject" class="form-control" name="subject" id="subject" placeholder="Subject" required>
        </div>
        <div class="form-group mt-3">
          <textarea v-model="form.message" class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
        </div>
        <div class="my-3">
          <div class="loading">Loading</div>
          <div class="error-message"></div>
          <div class="sent-message">Your message has been sent. Thank you!</div>
        </div>
        <div class="text-center"><button type="submit">Send Message</button></div>
      </form>
</template>
<script>
  export default {
    
    data () {
      return {
      senderName:'',
      success :false,
      form:{
        name: '',
        email: '',
        subject: '',
        message: '',
        },
       
      }
    },
  
    methods:{
       clear(){
        this.form.name= '',
        this.form.email= '',
        this.form.subject= '',
       this.form.message= ''
       },
       test(){
        
        axios.post('/api/contact',{
          name: this.form.name, 
          email: this.form.email, 
          subject: this.form.subject, 
          message: this.form.message, 
        })
        .then((response)=>{
          console.log(response)
          this.senderName=response.data.name
          this.success= true
          this.clear()
        })
       // console.log(this.form.name+" "+this.form.email+" "+this.form.subject+" "+this.form.message)
       }
    }
  }
</script>