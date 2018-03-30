<template lang="html">
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex xs8>
        <question
         v-for="question in questions"
         :key="question.path"
         :data=question
        ></question>
      </v-flex>
      sidebar
    </v-layout>
  </v-container>
</template>

<script>
import question from './question.vue';
export default {
  components:{question},
  data(){
    return {
      questions: {}
    }
  },
  created(){
    axios.post('/api/question')
      .then(res => this.questions = res.data.data)
      .catch(error => console.log(error.response.data))
  }
}
</script>

<style lang="css">
</style>
