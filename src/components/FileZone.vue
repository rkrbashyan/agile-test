<template>
  <div id="file-zone">
    <div id="file" @click="clearSelectedWord">
      <FormatedWord v-for="textWord in textWords" :textWord="textWord" :key="textWord.key" />
    </div>
    <template>
      <Synonyms />
    </template>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import FormatedWord from "./FormatedWord";
import Synonyms from "./Synonyms";

export default {
  name: "FileZone",
  components: {
    FormatedWord,
    Synonyms
  },
  methods: {
    clearSelectedWord() {
      this.selectWord(null);
    },
    ...mapActions(["setTextWords", "selectWord"])
  },
  computed: {
    ...mapState(["textWords"])
  },
  created() {
    this.setTextWords();
  }
};
</script>
<style scoped>
#file-zone {
  background-color: #f1f0f0;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
}

#file {
  width: 600px;
  flex-grow: 1;
  background-color: #fff;
  border: 1px solid #e4dede;
}
</style>
