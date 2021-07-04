<template>
  <div id="decreto">
    <div id="decreto-content">
      <FileCard :decretos="this.listDecretos"/>
    </div>
  </div>
</template>

<script>
import FileCard from './components/FileCard'
export default {
  components: { FileCard },
  data() {
    return {
      listDecretos: [
        {
          numero: '12345',
          data: '12/12/1211',
          desc:
            'It is a long established fact that a reader will be distracted',
          link: 'https://www.easepdf.com/pt/topics/free-resume-templates.html',
        },
        {
          numero: '12345',
          data: '12/12/1211',
          desc:
            'It is a long established fact that a reader will be distracted',
          link: 'https://www.easepdf.com/pt/topics/free-resume-templates.html',
        },
        {
          numero: '12345',
          data: '12/12/1211',
          desc:
            'It is a long established fact that a reader will be distracted',
          link: 'https://www.easepdf.com/pt/topics/free-resume-templates.html',
        },
        {
          numero: '12345',
          data: '12/12/1211',
          desc:
            'It is a long established fact that a reader will be distracted',
          link: 'https://www.easepdf.com/pt/topics/free-resume-templates.html',
        },
        {
          numero: '12345',
          data: '12/12/1211',
          desc:
            'It is a long established fact that a reader will be distracted',
          link: 'https://www.easepdf.com/pt/topics/free-resume-templates.html',
        },
        {
          numero: '12345',
          data: '12/12/1211',
          desc:
            'It is a long established fact that a reader will be distracted',
          link: 'https://www.easepdf.com/pt/topics/free-resume-templates.html',
        },
        {
          numero: '12345',
          data: '12/12/1211',
          desc:
            'It is a long established fact that a reader will be distracted',
          link: 'https://www.easepdf.com/pt/topics/free-resume-templates.html',
        },
        {
          numero: '12345',
          data: '12/12/1211',
          desc:
            'It is a long established fact that a reader will be distracted',
          link: 'https://www.easepdf.com/pt/topics/free-resume-templates.html',
        },
        {
          numero: '12345',
          data: '12/12/1211',
          desc:
            'It is a long established fact that a reader will be distracted',
          link: 'https://www.easepdf.com/pt/topics/free-resume-templates.html',
        },
      ],
    }
  },
}
</script>

<style scoped>
#decreto {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: #fff; */
}

#decreto-content {
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
