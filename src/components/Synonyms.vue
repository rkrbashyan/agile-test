<template>
  <div v-if="synonyms.length > 0">
    <h1>Synonyms for {{selectedWord.word}}</h1>
    <ul>
      <li v-for="synonym in synonyms" :key="synonym.score" @click="changeToSynonym(synonym.word)">{{synonym.word}}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      synonyms: []
    };
  },
  computed: {
    ...mapState(["selectedWord"])
  },
  watch: {
    selectedWord: function() {
      if (this.selectedWord != null) {
        axios
          .get(`http://api.datamuse.com/words?ml=${this.selectedWord.word}`)
          .then(
            response =>
              (this.synonyms = response.data
                .map(res => ({ word: res.word, score: res.score }))
                .slice(0, 5))
          );
      } else {
        this.synonyms = [];
      }
    }
  },
  methods: {
    ...mapActions(["changeToSynonym"])
  }
};
</script>

<style scoped>
li {
  cursor: pointer;
}
li:hover {
  background-color: blueviolet;
}
</style>
