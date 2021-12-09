Vue.createApp({
  data() {
    return {
      name: "",
      confirmName: "",
    };
  },
  methods: {
    checkBtn() {
      alert("I am clicked!!");
    },
    setName(event) {
      this.name = event.target.value;
    },
    setValue(event) {
      this.name = event.target.value;
    },
    confirm_name(event) {
      this.confirmName = event.target.value;
    },
  },
}).mount("#assignment");
