<template>
  <div id="App">
     <div class="container-fluid">
        <div class="container-wrapper">

           <div class="container-header">
             <Header></Header>
           </div>

           <div class="container-body">
              <nuxt />
           </div>

           <div class="container-footer">
             <Footer></Footer>
           </div>

       </div>

     </div>
  </div>
</template>

<script>
import Header from "~/components/Header/Header.vue";
import Footer from "~/components/Footer/Footer.vue";

 export default {
    name: "App",
    data() {
       return {

      }
    },
    components: {
      Header,
      Footer
    }
 }

</script>

<style scoped>

</style>
