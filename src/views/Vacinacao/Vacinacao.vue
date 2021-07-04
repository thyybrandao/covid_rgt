<template>
  <div id="vacinacao">
    <div id="vacinacao-content">
      <PlanoCard title="90 - 100 anos" descricao="Teste de descricao longo" :first="true" :second="false"/>
    </div>
  </div>
</template>

<script>
import PlanoCard from './components/PlanoCard'
export default {
  components: { PlanoCard },
}
</script>

<style scoped>
#vacinacao {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: #fff; */
}

#vacinacao-content {
  width: 50%;
  height: 100%;
  padding: 20px 20px 20px 20px;
  background-color: rgb(231, 231, 231);
  border-radius: 10px;
  overflow-y: auto;
}

::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}
::-webkit-scrollbar-thumb {
  background: #2c3e50;
  border-radius: 3px;
}
::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(13deg, #c7ceff 14%, #f9d4ff 64%);
}
::-webkit-scrollbar-track {
  background: #fff;
  border-radius: 10px;
  box-shadow: inset 7px 10px 12px #f0f0f0;
}
</style>
