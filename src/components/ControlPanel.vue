<template>
  <div id="control-panel">
    <div id="format-actions">
      <button className="format-action" type="button" @click="setStyle('b')"><b>B</b></button>
      <button className="format-action" type="button" @click="setStyle('i')"><i>I</i></button>
      <button className="format-action" type="button" @click="setStyle('u')"><u>U</u></button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "ControlPanel",
  methods: {
    ...mapActions(["setStyle"])
  }
};
</script>
<style scoped>
#control-panel {
  background-color: #fff;
  height: 25px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 5px;
}
#format-actions {
  width: 200px;
  margin-right: 400px;
}
</style>
