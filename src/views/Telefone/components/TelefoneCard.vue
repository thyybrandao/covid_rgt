<template>
  <div class="main">
    <div
      class="telefone-card"
      v-for="(tel, index) in this.telData"
      :key="index"
    >
      <div class="icon-telefone">
        <img src="../../../assets/images/home.svg" alt="" />
      </div>
      <div class="telefone-content">
        <p class="telefone-title">{{ tel.nome }}</p>
        <p><span>Bairro:</span> {{ tel.bairro }}</p>
        <p><span>Endereço:</span> {{ tel.endereco }}</p>
        <p><span>Telefone:</span> {{ tel.telefone }}</p>
        <p><span>Horário:</span> {{ tel.horario }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    telData: Array,
  },
}
</script>

<style scoped>
.main {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 5px;
  justify-content: center;
  align-content: center;
}
.telefone-card {
  width: 400px;
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
.telefone-content {
  width: 86%;
  height: 100px;
  padding: 10px 10px 10px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
}

.telefone-title {
  font-weight: bold;
}

.telefone-content p {
  text-align: left;
}
.telefone-content span {
  font-weight: 500;
}
.icon-telefone {
  width: 7%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: lawngreen; */
}

.icon-telefone p {
  margin-top: 8px;
  font-size: 12px;
}

.btn-download {
  cursor: pointer;
}
</style>
