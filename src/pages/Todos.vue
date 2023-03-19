<template>
  <div id="Todos">
     <div class="todos">
        <div class="wrapper-todos">

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
                                <div class="col-lg-9 col-md-9 col-sm-8 col-xs-6 th">
                                  <span>Title</span>
                                </div>
                                <div class="col-lg-3 col-md-3 col-sm-4 col-xs-6 th text-center">
                                   <span>Completed</span>
                                </div>
                            </div>
                          </div>

                          <div class="tbody">
                             <transition-group name="list" tag="div">
                                <div class="row tr p-3" v-for="item in pullInfoTodos" :key="item.id" v-on:click="nameUserTodo( item.userId )">
                                   <div class="col-lg-9 col-md-9 col-sm-8 col-xs-6 td">
                                      {{ item.title }}
                                   </div>
                                   <div class="col-lg-3 col-md-3 col-sm-4 col-xs-6 td text-center">
                                     {{ item.completed }}
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
   name: "Todos",
    data() {
       return {
         input_text: "",
      }
    },

    methods: {
       ...mapActions(["getInfoTodos", "getInfoUsersTodos"]),
       ...mapMutations(["filterTable"]),

       nameUserTodo( value ) {
         this.getInfoUsersTodos( value );
       }
    },

    watch: {

       input_text(value) {
          this.filterTable( value );
       }

    },

    computed: {
       ...mapGetters(["pullInfoTodos", "pullUserTodos"]),

    },

    async mounted() {

       this.getInfoTodos();
       this.getInfoUsersTodos();

   }
 }

</script>

<style scoped>
 /*.table .th,*/
 /*.table td {*/
 /*   border: 1px solid #333333;*/
 /*}*/

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
