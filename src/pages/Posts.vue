<template>
  <div id="Posts">
     <div class="posts">
        <div class="wrapper-posts">

           <div class="search-block text-center mb-5 mt-4">
             <p>You can find record in the table to colum "Title"</p>
             <input class="search" v-model="input_text" />
           </div>

<!--           <p>{{ pullUser() }}</p>-->

           <div class="table-block">
              <div class="container">
                 <div class="row justify-content-center">
                    <div class="col">

                       <table class="table">
                          <tr>
                             <th>Title</th>
                             <th>Body</th>
                          </tr>
                          <tr v-for="item in pullInfo" :key="item.id" v-on:click="nameUser( item.userId )">
                             <td>{{ item.title }}</td>
                             <td>{{ item.body }}</td>
                          </tr>
                       </table>
                    </div>
                 </div>
              </div>
           </div>

        </div>
     </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations} from "vuex";

 export default {
    name: "Posts",
    data() {
       return {
         input_text: "",
         user: ""
       }
    },

    methods: {
      ...mapActions(["getInfo", "getInfoUsers"]),
      ...mapMutations(["filterTable"]),

       nameUser( value ) {

          this.getInfoUsers( value );

       },

    },

    watch: {

       input_text(value) {
          this.filterTable( value );
       }

    },

    computed: {
       ...mapGetters(["pullInfo", "pullUser"]),

    },

    async mounted() {

      this.getInfo();
      this.getInfoUsers();



    },


 }

</script>

<style scoped>
 .table th,
 .table td {
  border: 1px solid #333333;
 }
</style>
