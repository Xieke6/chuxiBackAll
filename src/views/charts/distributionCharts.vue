<template>
  <div>当前部门id：{{id}}</div>
</template>

<script>
  export default {
    name: 'distributionCharts',
    data(){
      return {
        id:null,
      }
    },
    mounted() {
      this.id = this.$route.params.id;
    }
  }
</script>

<style scoped>

</style>
