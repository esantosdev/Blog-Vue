<template>
  <div>
  <b-card
    title="Saudações!"
    img-src="https://upload.wikimedia.org/wikipedia/commons/f/ff/Cat_on_laptop_-_Just_Browsing.jpg"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
        Você não precisa saber meu nome ou minha idade (mas meu vulgo é Eri, ou Cryptus). Só quero que aproveite as postagens e materiais! Clique no botão acervo e confira, ou navegue pelo menu.
    </b-card-text>

    <b-button href="#" variant="danger" class="button-dg"><router-link class="card-link" to="/Acervo">Acervo</router-link></b-button>
  </b-card>
</div>
</template>

<style scoped>
  .mb-2{
      margin: 0 auto; 
      float: none; 
      margin-top: 80px; 
  }

  .card-link{
      color: white !important
  }


</style>

<script>
export default {}
</script>