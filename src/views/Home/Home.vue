<template>
  <div class="home">
    <main id="main">
      <div id="main-content">
        <div id="main-content-text">
          <h1>
            Contra o <span>Covid</span> <br />
            o melhor remédio é a prevenção.
          </h1>
          <h2>
            Neste site você pode acompanhar dados sobre o virus e a vacinação em
            tempo real. Faça o cadastro para habilitar as notificações e baixar
            o app.
          </h2>
        </div>
        <div id="main-content-action">
          <div id="btn-about-plus" @click="saibaMais">Saiba mais</div>
          <div id="btn-watch-video" @click="video">Assista o vídeo</div>
        </div>

        <div id="main-content-covid">
          <p>Atualizado em {{ updateAt }}</p>

          <div id="main-content-covid-get">
            <CovidData
              title="Confirmados"
              v-bind:data="this.situationData.confirmed"
              today="8"
              yellow="true"
            />
            <CovidData
              title="Mortes"
              v-bind:data="this.situationData.deaths"
              today="8"
              red="true"
            />
            <CovidData
              title="Recuperados"
              v-bind:data="this.situationData.recovered"
              today="8"
              green="true"
            />
            <CovidData
              title="Vacinados"
              v-bind:data="this.situationData.vaccinated"
              today="8"
              cyan="true"
            />
          </div>
        </div>
      </div>
    </main>
    <SweetModal
      overlay-theme="dark"
      ref="video"
      title="Campanha contra a Covid-19"
      width="40%"
    >
      <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/D2zESBXbauA"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </SweetModal>
  </div>
</template>

<script>
// @ is an alias to /src

import { situationCollection } from '../../services/firebase'
import { format } from 'date-fns'
import { SweetModal } from 'sweet-modal-vue'
import CovidData from './components/CovidData'
export default {
  name: 'Home',
  components: { CovidData, SweetModal },
  data() {
    return {
      situationData: {},
      updateAt: '',
    }
  },
  created() {
    this.initData()
  },
  methods: {
    initData: function () {
      situationCollection.doc('ZqrsOZWBsxIhREOxtG5z').onSnapshot((doc) => {
        console.log(doc.data())
        var getDate = Date.now()
        this.situationData = doc.data()
        this.updateAt = format(getDate, 'dd/MM/yyyy - HH:mm')

        if (Notification.permission === 'granted') {
          const notification = new Notification('Prefeitura de Registro', {
            body: 'Dados sobre a covid-19 atualizados',
            icon: 'http://www.registro.sp.gov.br/images/logo-brasao-n.png',
          })

          notification.onclick = function (event) {
            event.preventDefault()
            window.focus()
            notification.close()
            window.open('http://localhost:8081/', '_blank')
          }

          notification.close()
        }
      })
    },
    video: function () {
      this.$refs.video.open()
    },
    saibaMais: function () {
      this.$router.push('/coronavirus')
    },
  },
}
</script>

<style scoped>
#main {
  width: 100vw;
  height: 80%;
  /* background-color: lavender; */
  background-image: url('./../../assets/images/virus.png');
  background-repeat: no-repeat;
  background-size: 37%;
  background-attachment: fixed;
  background-position-x: right;
  background-position-y: center;
}

#main #main-content {
  width: 50%;
  height: 100%;
  padding-left: 20px;
  padding-top: 20px;
}

#main #main-content #main-content-text h1 {
  width: 80%;
  height: 100%;
  color: white;
  font-size: 90px;
  text-align: left;
  /* background-color: rgb(200, 50, 205); */
}

#main #main-content #main-content-text span {
  color: #ff6060;
}

#main #main-content #main-content-text h2 {
  width: 80%;
  height: 100%;
  color: #4c4762;
  font-size: 20px;
  text-align: left;
  font-weight: 300;
  margin-top: 20px;
}

#main #main-content #main-content-action {
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

#main #main-content-action #btn-about-plus {
  width: 260px;
  height: 50px;
  background-image: linear-gradient(#ff6060, #c02929);
  border-radius: 12px;
  color: white;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  transition: background-color 0.5s linear, border 0.5s linear;
}

#main #main-content-action #btn-about-plus:hover {
  background-image: none;
  border: #ee8f5a 3px solid;
}

#main #main-content-action #btn-watch-video {
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

#main #main-content-action #btn-watch-video:hover {
  background-color: #ee8f5a;
  border: none;
}

#main #main-content-covid {
  width: 100%;
  height: auto;
  margin-top: 40px;
}

#main #main-content-covid-get {
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

#main #main-content-covid p {
  color: white;
  text-align: left;
  font-weight: 600;
}
</style>
