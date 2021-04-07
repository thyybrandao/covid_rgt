<template>
  <div id="main-content-covid-data">
    <p class="data-title">{{ title }}</p>
    <p :class="`data-value {{this.colorText}} `">{{ data }}</p>
    <p class="data-today"><span>HOJE:</span> {{ today }}</p>
  </div>
</template>

<script>
export default {
  name: 'CovidData',
  data() {
    return {
      colorText: {
        yellow: false,
        red: true,
        green: false,
        cyan: false,
      },
    }
  },
  props: {
    title: String,
    data: Number,
    today: String,
    yellow: Boolean,
    red: Boolean,
    green: Boolean,
    cyan: Boolean,
  },
}
</script>

<style scoped>
#main-content-covid-data {
  width: 200px;
  height: 120px;
  border-radius: 12px;
  background-color: #43319c;
  box-shadow: rgb(19, 19, 19) 3px 5px 10px;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

#main-content-covid-data .data-title {
  color: #f7f7f7;
  font-size: 16px;
  font-weight: 400;
}

#main-content-covid-data .data-value {
  color: #edc63c;
  font-size: 28px;
}

.change-yellow {
  color: #edc63c;
}
.change-red {
  color: #f86464;
}
.change-green {
  color: #81ff81;
}
.change-cyan {
  color: #80ffff;
}

#main-content-covid-data .data-today {
  color: #ffffff;
  font-size: 14px;
  font-weight: 400;
}

#main-content-covid-data .data-today span{
  color: #ffffff;
  font-size: 12px;
  font-weight: 400;
}
</style>
