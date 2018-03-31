<template lang="html">
  <div class="mt-4">
    <markdown-editor v-model="body" ref="markdownEditor"></markdown-editor>
    <v-btn dark icon color="green" @click="submit">
      Reply
      <!-- <v-icon color="green">done</v-icon> -->
    </v-btn>
  </div>
</template>

<script>
export default {
  props:['questionSlug'],
  data(){
    return {
      body: null
    }
  },
  methods: {
    submit(){
      axios.post(`/api/question/${this.questionSlug}/reply`,{body:this.body})
        .then(res => {
          this.body = ''
          EventBus.$emit('newReply', res.data.reply)
          window.scrollTo(0,0)
        })
    }
  }
}
</script>

<style lang="css">
</style>
