import Vue from "vue";
import Vuex from "vuex";
import SampleText from "../text.service";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    textWords: [],
    selectedWord: null
  },
  mutations: {
    SET_TEXTWORDS(state, textWords) {
      state.textWords = textWords;
    },
    SELECT_WORD(state, word) {
      state.selectedWord = word;
    },
    SET_SELECTED_WORD_STYLE(state, style) {
      state.selectedWord.formating = {
        ...state.selectedWord.formating,
        [style]: !state.selectedWord.formating[style]
      };
    },
    UPDATE_TEXT_WORDS(state) {
      state.textWords = state.textWords.map(w => {
        if (state.selectedWord != null && w.key === state.selectedWord.key) {
          return state.selectedWord;
        }
        return w;
      });
    },
    CHANGE_TO_SYNONYM(state, synonym) {
      state.selectedWord.word = synonym;
    }
  },
  actions: {
    setTextWords({ commit }) {
      SampleText()
        .then(text => {
          const textWords = text.split(" ").map((word, index) => ({
            word,
            formating: {
              i: false,
              b: false,
              u: false
            },
            key: index
          }));
          commit("SET_TEXTWORDS", textWords);
        })
        .catch(error => console.log(error));
    },
    selectWord({ commit }, word) {
      commit("SELECT_WORD", word);
    },
    setStyle({ commit, state }, style) {
      if (state.selectedWord != null) {
        commit("SET_SELECTED_WORD_STYLE", style);
        commit("UPDATE_TEXT_WORDS");
      }
    },
    changeToSynonym({ commit }, synonym) {
      commit("CHANGE_TO_SYNONYM", synonym);
      commit("UPDATE_TEXT_WORDS");
    }
  }
});
