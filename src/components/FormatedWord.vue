<template>
  <div class="-wrapper">
    <span :class="wordClass" @dblclick="selectWord(textWord)">{{textWord.word}}</span>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  props: {
    textWord: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions(["selectWord"])
  },
  computed: {
    wordClass() {
      let className = "";
      Object.keys(this.textWord.formating).forEach(key => {
        if (this.textWord.formating[key]) {
          className += ` ${key}`;
        }
      });

      if (this.isSelected) {
        className += " -selected";
      }

      return className;
    },

    isSelected() {
      if (this.selectedWord != null) {
        return this.textWord.key === this.selectedWord.key;
      }
      return false;
    },
    ...mapState(["selectedWord"])
  }
};
</script>

<style scoped>
.-wrapper {
  display: inline-flex;
}
.-wrapper::after {
  content: " ";
  white-space: pre;
}
.i {
  font-style: italic;
}
.u {
  text-decoration: underline;
}
.b {
  font-weight: bold;
}
.-selected {
  background-color: lightcoral;
}
</style>
