<template>
  <div id="app">
    <nav id="nav">
      <div id="logo-prefeitura">
        <img src="./assets/images/logo-prefeitura.png" alt="" srcset="" />
        <div id="logo-prefeitura-texto">
          <strong>Prefeitura Municipal de Registro</strong>
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

      <div id="btn-getNotification">Receber notificações</div>
    </nav>
    <div id="main">
      <router-view></router-view>
    </div>
    <footer id="footer">
      <p>
        Desenvolvido por <a href="#"> Thyago Brandão de Paula</a> para a
        <a href="#">Prefeitura de Registro</a> - Todos os direitos reservados,
        {{ getYear }}
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
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

#logo-prefeitura img {
  width: 75px;
  height: 75px;
  margin-top: 5px;
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

#app #main{
  height: 80%;
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
</style>
