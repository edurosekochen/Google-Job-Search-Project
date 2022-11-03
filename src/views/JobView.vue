<template>
  <div> Job Page for job {{currentJobId}}</div>
</template>

<script>
  export default {
    name: "JobView",
    computed: {
      currentJobId() {
        console.log(this.$route);
        return this.$route.params.id;
      }
    } 
  };

</script>

