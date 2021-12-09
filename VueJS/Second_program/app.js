Vue.createApp({
  data() {
    return {
      goalsA: "Developer",
      goalsB: "Designer",
      msg: "<h2>Hello I am Vue !!!!</h2>",
      link: "https://vuejs.org/v2/guide/",
    };
  },
  methods: {
    ourGoals() {
      const random_num = Math.random();
      if (random_num < 0.5) {
        return this.goalsA;
      } else {
        return this.goalsB;
      }
    },
  },
}).mount("#user");
