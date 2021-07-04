<template>
  <div class="main">
    <div id="telefone">
      <div id="telefone-content">
        <select name="" id="">
          <option value="">Selecione uma categoria</option>
        </select>

        <div class="telefone-result">
          <table class="demo">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Endereço</th>
                <th>Bairro</th>
                <th>Telefone</th>
                <th>Horário</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(tel, index) in this.listTelefones"
                :key="index"
              >
                <td>{{ tel.nome }}</td>
                <td>{{ tel.endereco }}</td>
                <td>{{ tel.bairro }}</td>
                <td>{{ tel.telefone }}</td>
                <td>{{ tel.horario }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      listTelefones: [
        {
          nome: 'UBS JD. Paulistano',
          bairro: 'Jd. Paulistano',
          endereco: 'Av. Jesus Alves Costa, 672',
          telefone: '(13) 3821-8987',
          horario: '08:00 - 16:00',
        },
        {
          nome: 'UBS JD. Paulistano',
          bairro: 'Jd. Paulistano',
          endereco: 'Av. Jesus Alves Costa, 672',
          telefone: '(13) 3821-8987',
          horario: '08:00 - 16:00',
        },
        {
          nome: 'UBS JD. Paulistano',
          bairro: 'Jd. Paulistano',
          endereco: 'Av. Jesus Alves Costa, 672',
          telefone: '(13) 3821-8987',
          horario: '08:00 - 16:00',
        },
        {
          nome: 'UBS JD. Paulistano',
          bairro: 'Jd. Paulistano',
          endereco: 'Av. Jesus Alves Costa, 672',
          telefone: '(13) 3821-8987',
          horario: '08:00 - 16:00',
        },
        {
          nome: 'UBS JD. Paulistano',
          bairro: 'Jd. Paulistano',
          endereco: 'Av. Jesus Alves Costa, 672',
          telefone: '(13) 3821-8987',
          horario: '08:00 - 16:00',
        },
        {
          nome: 'UBS JD. Paulistano',
          bairro: 'Jd. Paulistano',
          endereco: 'Av. Jesus Alves Costa, 672',
          telefone: '(13) 3821-8987',
          horario: '08:00 - 16:00',
        },
        {
          nome: 'UBS JD. Paulistano',
          bairro: 'Jd. Paulistano',
          endereco: 'Av. Jesus Alves Costa, 672',
          telefone: '(13) 3821-8987',
          horario: '08:00 - 16:00',
        },
        {
          nome: 'UBS JD. Paulistano',
          bairro: 'Jd. Paulistano',
          endereco: 'Av. Jesus Alves Costa, 672',
          telefone: '(13) 3821-8987',
          horario: '08:00 - 16:00',
        },
        {
          nome: 'UBS JD. Paulistano',
          bairro: 'Jd. Paulistano',
          endereco: 'Av. Jesus Alves Costa, 672',
          telefone: '(13) 3821-8987',
          horario: '08:00 - 16:00',
        },
        {
          nome: 'UBS JD. Paulistano',
          bairro: 'Jd. Paulistano',
          endereco: 'Av. Jesus Alves Costa, 672',
          telefone: '(13) 3821-8987',
          horario: '08:00 - 16:00',
        },
        {
          nome: 'UBS JD. Paulistano',
          bairro: 'Jd. Paulistano',
          endereco: 'Av. Jesus Alves Costa, 672',
          telefone: '(13) 3821-8987',
          horario: '08:00 - 16:00',
        },
        {
          nome: 'UBS JD. Paulistano',
          bairro: 'Jd. Paulistano',
          endereco: 'Av. Jesus Alves Costa, 672',
          telefone: '(13) 3821-8987',
          horario: '08:00 - 16:00',
        },
        {
          nome: 'UBS JD. Paulistano',
          bairro: 'Jd. Paulistano',
          endereco: 'Av. Jesus Alves Costa, 672',
          telefone: '(13) 3821-8987',
          horario: '08:00 - 16:00',
        },
        {
          nome: 'UBS JD. Paulistano',
          bairro: 'Jd. Paulistano',
          endereco: 'Av. Jesus Alves Costa, 672',
          telefone: '(13) 3821-8987',
          horario: '08:00 - 16:00',
        },
        {
          nome: 'UBS JD. Paulistano',
          bairro: 'Jd. Paulistano',
          endereco: 'Av. Jesus Alves Costa, 672',
          telefone: '(13) 3821-8987',
          horario: '08:00 - 16:00',
        },
        {
          nome: 'UBS JD. Paulistano',
          bairro: 'Jd. Paulistano',
          endereco: 'Av. Jesus Alves Costa, 672',
          telefone: '(13) 3821-8987',
          horario: '08:00 - 16:00',
        },
        {
          nome: 'UBS JD. Paulistano',
          bairro: 'Jd. Paulistano',
          endereco: 'Av. Jesus Alves Costa, 672',
          telefone: '(13) 3821-8987',
          horario: '08:00 - 16:00',
        },
        {
          nome: 'UBS JD. Paulistano',
          bairro: 'Jd. Paulistano',
          endereco: 'Av. Jesus Alves Costa, 672',
          telefone: '(13) 3821-8987',
          horario: '08:00 - 16:00',
        },
        {
          nome: 'UBS JD. Paulistano',
          bairro: 'Jd. Paulistano',
          endereco: 'Av. Jesus Alves Costa, 672',
          telefone: '(13) 3821-8987',
          horario: '08:00 - 16:00',
        },
        {
          nome: 'UBS JD. Paulistano',
          bairro: 'Jd. Paulistano',
          endereco: 'Av. Jesus Alves Costa, 672',
          telefone: '(13) 3821-8987',
          horario: '08:00 - 16:00',
        },
        {
          nome: 'UBS JD. Paulistano',
          bairro: 'Jd. Paulistano',
          endereco: 'Av. Jesus Alves Costa, 672',
          telefone: '(13) 3821-8987',
          horario: '08:00 - 16:00',
        },
        {
          nome: 'UBS JD. Paulistano',
          bairro: 'Jd. Paulistano',
          endereco: 'Av. Jesus Alves Costa, 672',
          telefone: '(13) 3821-8987',
          horario: '08:00 - 16:00',
        },
        {
          nome: 'UBS JD. Paulistano',
          bairro: 'Jd. Paulistano',
          endereco: 'Av. Jesus Alves Costa, 672',
          telefone: '(13) 3821-8987',
          horario: '08:00 - 16:00',
        },
        {
          nome: 'UBS JD. Paulistano',
          bairro: 'Jd. Paulistano',
          endereco: 'Av. Jesus Alves Costa, 672',
          telefone: '(13) 3821-8987',
          horario: '08:00 - 16:00',
        },
        {
          nome: 'UBS JD. Paulistano',
          bairro: 'Jd. Paulistano',
          endereco: 'Av. Jesus Alves Costa, 672',
          telefone: '(13) 3821-8987',
          horario: '08:00 - 16:00',
        },
        {
          nome: 'UBS JD. Paulistano',
          bairro: 'Jd. Paulistano',
          endereco: 'Av. Jesus Alves Costa, 672',
          telefone: '(13) 3821-8987',
          horario: '08:00 - 16:00',
        },
        {
          nome: 'UBS JD. Paulistano',
          bairro: 'Jd. Paulistano',
          endereco: 'Av. Jesus Alves Costa, 672',
          telefone: '(13) 3821-8987',
          horario: '08:00 - 16:00',
        },
        {
          nome: 'UBS JD. Paulistano',
          bairro: 'Jd. Paulistano',
          endereco: 'Av. Jesus Alves Costa, 672',
          telefone: '(13) 3821-8987',
          horario: '08:00 - 16:00',
        },
        {
          nome: 'UBS JD. Paulistano',
          bairro: 'Jd. Paulistano',
          endereco: 'Av. Jesus Alves Costa, 672',
          telefone: '(13) 3821-8987',
          horario: '08:00 - 16:00',
        },
        {
          nome: 'UBS JD. Paulistano',
          bairro: 'Jd. Paulistano',
          endereco: 'Av. Jesus Alves Costa, 672',
          telefone: '(13) 3821-8987',
          horario: '08:00 - 16:00',
        },
        {
          nome: 'UBS JD. Paulistano',
          bairro: 'Jd. Paulistano',
          endereco: 'Av. Jesus Alves Costa, 672',
          telefone: '(13) 3821-8987',
          horario: '08:00 - 16:00',
        },
        {
          nome: 'UBS JD. Paulistano',
          bairro: 'Jd. Paulistano',
          endereco: 'Av. Jesus Alves Costa, 672',
          telefone: '(13) 3821-8987',
          horario: '08:00 - 16:00',
        },
        {
          nome: 'UBS JD. Paulistano',
          bairro: 'Jd. Paulistano',
          endereco: 'Av. Jesus Alves Costa, 672',
          telefone: '(13) 3821-8987',
          horario: '08:00 - 16:00',
        },
        {
          nome: 'UBS JD. Paulistano',
          bairro: 'Jd. Paulistano',
          endereco: 'Av. Jesus Alves Costa, 672',
          telefone: '(13) 3821-8987',
          horario: '08:00 - 16:00',
        },
        {
          nome: 'UBS JD. Paulistano',
          bairro: 'Jd. Paulistano',
          endereco: 'Av. Jesus Alves Costa, 672',
          telefone: '(13) 3821-8987',
          horario: '08:00 - 16:00',
        },
        {
          nome: 'UBS JD. Paulistano',
          bairro: 'Jd. Paulistano',
          endereco: 'Av. Jesus Alves Costa, 672',
          telefone: '(13) 3821-8987',
          horario: '08:00 - 16:00',
        },
        {
          nome: 'UBS JD. Paulistano',
          bairro: 'Jd. Paulistano',
          endereco: 'Av. Jesus Alves Costa, 672',
          telefone: '(13) 3821-8987',
          horario: '08:00 - 16:00',
        },
        {
          nome: 'UBS JD. Paulistano',
          bairro: 'Jd. Paulistano',
          endereco: 'Av. Jesus Alves Costa, 672',
          telefone: '(13) 3821-8987',
          horario: '08:00 - 16:00',
        },
        {
          nome: 'UBS JD. Paulistano',
          bairro: 'Jd. Paulistano',
          endereco: 'Av. Jesus Alves Costa, 672',
          telefone: '(13) 3821-8987',
          horario: '08:00 - 16:00',
        },
        {
          nome: 'UBS JD. Paulistano',
          bairro: 'Jd. Paulistano',
          endereco: 'Av. Jesus Alves Costa, 672',
          telefone: '(13) 3821-8987',
          horario: '08:00 - 16:00',
        },
        {
          nome: 'UBS JD. Paulistano',
          bairro: 'Jd. Paulistano',
          endereco: 'Av. Jesus Alves Costa, 672',
          telefone: '(13) 3821-8987',
          horario: '08:00 - 16:00',
        },
        {
          nome: 'UBS JD. Paulistano',
          bairro: 'Jd. Paulistano',
          endereco: 'Av. Jesus Alves Costa, 672',
          telefone: '(13) 3821-8987',
          horario: '08:00 - 16:00',
        },
      ],
      tableClass: {
        tbrow: true,
      },
    }
  },
  methods: {
    count: function (i) {
      var total = i / 2
      total % 2 == 0
        ? (this.tableClass.tbrow = false)
        : (this.tableClass.tbrow = true)
    },
  },
  computed: {
    teste: function (i) {
      var total = i / 2
      if (total % 2 == 0) {
        return {
          tbrow: false,
        }
      } else {
        return {
          tbrow: true,
        }
      }
    },
  },
}
</script>

<style scoped>
#telefone {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: #fff; */
}

#telefone-content {
  width: 50%;
  height: 80%;
  padding: 5px 5px 5px 5px;
  background-color: rgb(231, 231, 231);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#telefone-content select {
  width: 50%;
  height: 50px;
  border-radius: 10px;
  border: #2c3e50 2px solid;
  font-size: 14px;
  color: #2c3e50;
  margin-bottom: 15px;
  margin-top: 15px;
}

.telefone-result {
  width: 100%;
  height: 650px;
  padding: 10px;
  /* background-color: brown; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
  overflow-y: auto;
}

.tbrow {
  background-color: blueviolet;
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

<!-- <TelefoneCard
              :nome="tel.nome"
              :bairro="tel.bairro"
              :endereco="tel.endereco"
              :telefone="tel.telefone"
              :horario="tel.horario"
            /> -->
