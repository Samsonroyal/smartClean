<template>
  <div class="container">
    <div class="row">
      <div class="col-5 mt-2">
        <h3>Student Registration form</h3>
        <hr />
        <div class="input-group mb-3 mt-3">
          <input
            type="text"
            class="form-control"
            placeholder="Student's name"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            v-model="studentName"
          />
          <button class="btn btn-dark" type="button" id="button-addon2" v-on:click="registerStudent">
            Register
          </button>
        </div>
      </div>
      <div class="col-7 mt-2">
        <PropStuff :students="students" />
      </div>
    </div>
  </div>
</template>

<script>
import PropStuff from "./PropStuff.vue"
export default {
  name: "ModelStuff",
  data: function () {
    return {
        students:[],
        studentName:""
    };
  },
  methods: {
      registerStudent:function(){
          this.students.push(this.studentName)
      }
  },
  components: {
      PropStuff
  },
};
</script>
/*
        Props
        Slots 

        Routing (Vue-Router-next lib)
        State Management [Vuex lib]
        Building Components (Vuetify lib)
        VENoM Stack
        Nuxtjs
        REST APIs / GraphQL
    */ 
