<template>
  <div class="main">
    <div
      class="file-card"
      v-for="(decreto, index) in this.decretos"
      :key="index"
    >
      <div class="icon-file">
        <Doc class="icon-svg" />
        <!-- <img src="../../../assets/images/document.svg" alt="" /> -->
        <p>Decreto {{ decreto.numero }}</p>
      </div>
      <div class="file-content">
        <p><span>Data:</span> {{ decreto.data }}</p>
        <p>
          {{ decreto.desc }}
        </p>
      </div>
      <div class="icon-file btn-download" @click="download(decreto.link)">
        <Download class="btn-download teste" />
        <!-- <img width="30px" src="../../../assets/images/download.svg" alt="" /> -->
        <p>Baixar</p>
      </div>
    </div>
  </div>
</template>

<script>
import Doc from '../../../assets/images/document.svg'
import Download from '../../../assets/images/download.svg'
export default {
  name: 'FileCard',
  components: { Doc, Download },
  methods: {
    download: function (link) {
      window.open(link, 'blank')
    },
  },
  props: {
    decretos: Array,
  },
}
</script>

<style scoped>
.file-card {
  width: 100%;
  height: auto;
  padding: 10px 10px 10px 10px;
  border: #2c3e50 2px solid;
  border-radius: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.file-content {
  width: 86%;
  height: 100px;
  padding: 10px 10px 10px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
}

.file-content p {
  text-align: left;
}
.file-content span {
  font-weight: 500;
}
.icon-file {
  width: 7%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: lawngreen; */
}

.icon-file p {
  margin-top: 8px;
  font-size: 12px;
}

.icon-svg {
  width: 100%;
  height: 100%;
  color: #2c3e50;
}

.btn-download {
  cursor: pointer;
}

.teste {
  width: 10%;
  height: 10%;
  color: #2c3e50;
}
</style>
