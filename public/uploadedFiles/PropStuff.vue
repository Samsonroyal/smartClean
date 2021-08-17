<template>
  <div>
    <h3>Student Registration List</h3>
    <ol class="list-group list-group-numbered text-start mb-5">
      <li
        class="list-group-item"
        v-for="student in students"
        v-bind:key="student"
      >
        {{ student }}
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "PropStuff",
  data: function () {
    return {};
  },
  props: {
      students:{
          type:Array
      }
  }
};
</script>

<style></style>
