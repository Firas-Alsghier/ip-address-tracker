<template>
  <div>
    <header>
      <h1 class="title">IP Address Tracker</h1>
      <div class="search">
        <div>
          <input class="input" type="text" v-model="data" placeholder="Search for any IP address or domain" />
        </div>
        <div class="icon" @click="getIp()">
          <font-awesome-icon class="fa-chevron-right" icon="fa-solid fa-chevron-right" />
        </div>
      </div>
      <div class="result">
        <div class="row-1">
          <div class="content">
            <p class="label">ip address</p>
            <h2 v-if="ipData">{{ ipData.data.ip }}</h2>
          </div>
        </div>
        <div class="row-2 row">
          <div class="content">
            <p class="label">location</p>
            <h2 v-if="ipData">{{ ipData.data.location.city }}</h2>
          </div>
        </div>
        <div class="row-3 row">
          <div class="content">
            <p class="label">Timezone</p>
            <h2 v-if="ipData">{{ ipData.data.location.timezone }}</h2>
          </div>
        </div>
        <div class="row-4 row">
          <div class="content">
            <p class="label">isp</p>
            <h2 v-if="ipData">{{ ipData.data.isp }}</h2>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      data: '',
    };
  },
  computed: {
    ...mapState(['ipData']),
  },

  methods: {
    getIp() {
      console.log(this.data);
      return this.$store.dispatch('getInputIp', this.data);
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  background-image: url('../assets/images/pattern-bg.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  position: relative;
  z-index: 2;
}

.title {
  color: #ffffff;
  text-align: center;
  margin: 30px 0;
}

.search {
  display: flex;
}

.input {
  padding: 20px;
  font-size: 18px;
  width: 500px;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  border: none;
  outline: none;
  &::placeholder {
    color: hsl(0, 0%, 59%);
  }
}

.icon {
  background: #000000;
  padding: 0 20px;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  text-align: center;
  display: flex;
  cursor: pointer;
  align-items: center;
  .fa-chevron-right {
    color: #ffffff;
    font-size: 20px;
  }
}

.result {
  display: flex;
  justify-content: space-between;
  background: #ffffff;
  width: 950px;
  transform: translateY(27px);
  padding: 45px;
  border-radius: 15px;
  .row {
    border-left: 2px solid hsl(0, 0%, 59%);
    padding-left: 15px;
    padding-bottom: 15px;
  }
  .label {
    color: hsl(0, 0%, 59%);
  }
  h2 {
    color: hsl(0, 0%, 17%);
    font-weight: 500;
    margin-top: 10px;
    width: 70%;
  }
}
</style>
