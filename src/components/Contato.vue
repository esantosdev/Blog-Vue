<template>
    <div class="container">
        <form>
          <label>Nome</label>
          <input 
            type="text" 
            v-model="name"
            name="name"
            placeholder="Seu Nome"
          >
          <label>Email</label>
          <input 
            type="email" 
            v-model="email"
            name="email"
            placeholder="Seu Email"
            >
          <label>Mensagem</label>
          <textarea 
            name="message"
            v-model="message"
            cols="30" rows="5"
            placeholder="Mensagem">
          </textarea>
          
          <input type="submit" value="Enviar">
        </form>
    </div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  name: 'Contato',
  data() {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target,
        'YOUR_USER_ID', {
          name: this.name,
          email: this.email,
          message: this.message
        })

      } catch(error) {
          console.log({error})
      }
     
      this.name = ''
      this.email = ''
      this.message = ''
    },
  }
}
</script>

<style scoped>
* {box-sizing: border-box;}

.container {
  display: block;
  margin:auto;
  text-align: center;
  border-radius: 5px;
  background-color: violet;
  padding: 20px;
  width: 50%;
  font-weight: bolder;
}

label {
  float: left;
}

input[type=text], [type=email], textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type=submit] {
  background-color: blue;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
 
}

input[type=submit]:hover {
  background-color: #45a049;
}
</style>

<script>
export default {}
</script>