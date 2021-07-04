<template>
  <div id="app">
    <nav id="nav">
      <div id="logo-prefeitura">
        <div class="logo"></div>
        <!-- <img src="./assets/images/logo-prefeitura.png" alt="" srcset="" /> -->
        <div id="logo-prefeitura-texto">
          <strong>Prefeitura Municipal de Teste</strong>
          <p>Secretária de Saúde</p>
        </div>
      </div>

      <div id="menu">
        <router-link to="/"> HOME </router-link>
        <router-link to="/coronavirus" class="danger">
          O CORONAVIRUS
        </router-link>
        <router-link to="/vacinacao" class="hope">
          PLANO DE VACINAÇÃO
        </router-link>
        <router-link to="/telefones"> TELEFONES ÚTEIS </router-link>
        <router-link to="/decretos"> DECRETOS </router-link>
      </div>

      <div id="btn-getNotification" @click="storeNotify">
        Receber notificações
      </div>
    </nav>
    <div id="main">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
    <footer id="footer">
      <p>
        Desenvolvido por <a href="#"> Thyago Brandão de Paula</a> para a
        <a href="#">Prefeitura de Teste</a> - Todos os direitos reservados,
        {{ getYear }}
      </p>
    </footer>

    <SweetModal
      overlay-theme="dark"
      ref="notify"
      title="Receba atualizações"
      width="30%"
    >
      <p class="text-form-notify">
        Recebe notificações em seu navegador quando houver uma atualização no
        quadro da Covid-19 na cidade de Registro/SP. Criando o cadastro vocês
        também receberá o link para download do nosso aplicativo, para ser
        atualizado também através do seu dispositivo móvel.
      </p>
      <form v-on:submit.prevent class="form-notify">
        <input type="text" name="" id="" placeholder="Nome Completo" required />
        <input type="email" name="" id="" placeholder="E-mail" required />
        <TheMask
          :mask="['(##)#####-####']"
          placeholder="Celular"
          required
        ></TheMask>
        <button type="submit">Cadastrar</button>
      </form>
    </SweetModal>
  </div>
</template>

<script>
import { SweetModal } from 'sweet-modal-vue'
import { TheMask } from 'vue-the-mask'
export default {
  name: 'App',
  components: { SweetModal, TheMask },
  methods: {
    storeNotify: function () {
      if (Notification.permission !== 'denied') {
        Notification.requestPermission()
      }

      this.$refs.notify.open()
    },
  },
  computed: {
    getYear: function () {
      var d = new Date()
      return d.getFullYear()
    },
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,300&display=swap');

* {
  padding: 0;
  margin: 0;
  border: 0;
  box-sizing: border-box;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  text-align: center;
  color: #2c3e50;
  background-color: #1c1732;
  background-image: url('./assets/images/bg.png');
  background-repeat: no-repeat;
  background-size: 100%;
  background-attachment: fixed;
  width: 100vw;
  height: 100vh;
}

#nav {
  width: 100vw;
  height: 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* padding: 10px 0px 10px 0px; */
}

#nav #menu .danger {
  color: #ffa0a0;
  text-shadow: 0px 0px 10px #cc4646;
  transition: text-shadow 2s linear, color 2s linear;
}

#nav #menu .danger:hover {
  color: #ffffff;
  text-shadow: none;
}

#nav #menu .hope {
  color: #d8ffb0;
  text-shadow: 0px 0px 10px #94ff29;
  transition: text-shadow 2s linear, color 2s linear;
}

#nav #menu .hope:hover {
  color: #ffffff;
  text-shadow: none;
}

#logo-prefeitura {
  width: 500px;
  height: 90px;
  display: flex;
  margin-left: 20px;
}

#logo-prefeitura .logo {
  width: 75px;
  height: 75px;
  margin-top: 5px;
  background-color: #cc4646;
  border-radius: 50px;
}

#logo-prefeitura #logo-prefeitura-texto {
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
}

#logo-prefeitura-texto strong {
  font-size: 20px;
  color: white;
}

#logo-prefeitura-texto p {
  font-size: 16px;
  color: white;
}

#nav #menu {
  width: 600px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

#nav #menu a {
  color: #fdfeff;
  text-decoration: none;
}

#nav #menu a.router-link-exact-active {
  text-decoration: underline;
}

#nav #btn-getNotification {
  width: 260px;
  height: 50px;
  border: #ee8f5a 3px solid;
  border-radius: 12px;
  color: white;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  transition: background-color 1s linear, border 1s linear;
}

#nav #btn-getNotification:hover {
  background-color: #ee8f5a;
  border: none;
}

#app #main {
  height: 80%;
  /* overflow: hidden; */
}

#footer {
  width: 100vw;
  height: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #423d58;
  /* background-color: rgb(105, 105, 248); */
}

#footer a {
  text-decoration: none;
  color: #423d58;
}

.form-notify {
  width: 100%;
  height: auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.form-notify input {
  width: 100%;
  height: 50px;
  margin-bottom: 10px;
  border-radius: 10px;
  border: #423d58 1px solid;
  padding-left: 10px;
}

.form-notify button {
  width: 50%;
  height: 50px;
  background-color: #423d58;
  margin-bottom: 10px;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
}

.form-notify button:hover {
  width: 50%;
  height: 50px;
  background-color: #f5f5f5;
  margin-bottom: 10px;
  border-radius: 10px;
  border: #423d58 1px solid;
  color: #423d58;
  cursor: pointer;
}

.text-form-notify {
  text-align: justify;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
