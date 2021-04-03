<template>
  <div id="app">
    <div>
  <b-navbar toggleable="lg" class="nav-princ" type="light" variant="info">
    <b-navbar-brand class="nav-princ"  href="#">Codigo no Ponto</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <router-link class="nav-link" to="/">Home</router-link>
        <router-link class="nav-link" to="/Sobre">Sobre</router-link>
        <router-link class="nav-link" to="/Acervo">Acervo</router-link>
        <router-link class="nav-link" to="/Contato">Contato</router-link>

      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
       
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
   

    <div>
      <router-view/>
    </div>
  </div>

</template>
<style scoped>



 .nav-princ{
   background-color:#6600cc !important;
 }

 .nav-link{
   font-weight: bolder;
   color: white !important;
 }

.nav-princ{
  color: white !important;
}





</style>