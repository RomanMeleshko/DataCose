<template>
  <div id="Posts">
     <div class="posts">
        <div class="wrapper-posts">

           <div class="search-block text-center mb-5 mt-4">
             <p>You can find record in the table to column "Title"</p>
             <input class="search" v-model="input_text" />
           </div>

           <div class="table-block">
              <div class="container">
                 <div class="row justify-content-center">
                    <div class="col">

                       <div class="table">
                          <div class="thead">
                             <div class="row tr p-3">
                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 th">
                                  <span>Title</span>
                                </div>
                                <div class="col-lg-8 col-md-8 col-sm-8 col-xs-8 th text-center">
                                   <span>Body</span>
                                </div>
                            </div>
                          </div>

                          <div class="tbody">
                             <transition-group name="list" tag="div">
                                <div class="row tr p-3" v-for="item in pullInfo" :key="item.id" v-on:click="nameUser( item.userId )">
                                   <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 td">
                                      {{ item.title }}
                                   </div>
                                   <div class="col-lg-8 col-md-8 col-sm-8 col-xs-8 td text-center">
                                     {{ item.body }}
                                   </div>
                                </div>
                             </transition-group>
                          </div>
                       </div>

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
 .table .thead .tr {
   background: #dbe1db;
 }

 .table .tbody .tr:nth-child(odd){
   background: #f4f8f8;
 }

 .table .tbody .tr {
   cursor: pointer;
 }

 .list-item {
   display: inline-block;
   margin-right: 10px;
 }
 .list-enter-active,
 .list-leave-active {
   transition: all 0.2s ease;
 }
 .list-enter-from,
 .list-leave-to {
   opacity: 0;
   transform: translateY(30px);
 }
</style>
