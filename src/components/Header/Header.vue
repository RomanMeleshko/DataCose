<template>
  <div id="Header">
     <div class="header">
        <div class="wrapper-header">

           <nav class="navbar navbar-light bg-light">
              <a class="navbar-brand justify-content-start" href="#">DataCose</a>
              <div class="buttons m-auto pr-lg-5 pr-md-5">
                 <nuxt-link class="border btn btn-primary p-2" to="/Posts">
                   Go to Posts page
                 </nuxt-link>

                 <nuxt-link class="border btn btn-primary p-2" to="/Todos">
                   Go to Todos page
                 </nuxt-link>
              </div>
           </nav>

        </div>
     </div>
  </div>
</template>

<script>

 export default {
   name: "Header",
   data() {
     return {

     }
   }
 }

</script>

<style scoped>

</style>
