<template>
  <div class="plano-card">
    <div class="plano-card-tag">
      <Seringa class="icon-vacina" />
    </div>
    <div class="plano-card-content">
      <p class="vacina-card-title">{{ title }}</p>
      <p>{{ descricao }}</p>
      <p>
        <span>1°Dose:</span> {{ getfirst }} - <span>2°Dose:</span>
        {{ getsecond }}
      </p>
    </div>
    <img src="../../../assets/images/ok.svg" alt="" />
    <Ok v-bind:class="iconstate" v-if="first == true && second == true" />
    <No v-bind:class="iconstate" v-if="first == false && second == false" />
    <Question
      v-bind:class="iconstate"
      v-if="first == false && second == true"
    />
    <Exclamation
      v-bind:class="iconstate"
      v-if="first == true && second == false"
    />
  </div>
</template>

<script>
import Seringa from '../../../assets/images/syringe.svg'
import Ok from '../../../assets/images/ok.svg'
import No from '../../../assets/images/no.svg'
import Question from '../../../assets/images/question.svg'
import Exclamation from '../../../assets/images/exclamation.svg'

export default {
  components: { Seringa, Ok, No, Question, Exclamation },
  data() {
    return {
      iconstate: {
        ok: false,
        queston: false,
        no: false,
        exclamation: false,
        'icon-situation': true,
      },
    }
  },
  props: {
    title: String,
    idade: String,
    descricao: String,
    first: Boolean,
    second: Boolean,
  },
  computed: {
    getfirst: function () {
      return this.first == true ? 'OK' : 'ANDAMENTO'
    },
    getsecond: function () {
      return this.second == true ? 'OK' : 'ANDAMENTO'
    },
  },
}
</script>

<style scoped>
.plano-card {
  width: 100%;
  height: auto;
  /* padding: 10px 10px 10px 10px; */
  border: #2c3e50 2px solid;
  border-radius: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.icon-situation {
  width: 50px;
  height: 100px;
  margin-right: 15px;
  color: #2c3e50;
}

.plano-card-tag {
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #2c3e50;
  -webkit-clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
  clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
}

.icon-vacina {
  width: 50px;
  height: 100px;
  margin-right: 15px;
  color: rgb(253, 253, 253);
}

.plano-card-content {
  width: 80%;
  height: 100px;
  padding: 10px 10px 10px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.plano-card-content span {
  font-weight: 700;
}
.vacina-card-title {
  font-size: 18px;
  font-weight: 700;
}

.ok {
  color: chartreuse;
}
</style>
