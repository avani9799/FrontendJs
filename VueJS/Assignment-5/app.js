const app = Vue.createApp({
    data() {
      return { 
        enteredValue:'',
        tasks:[],
        taskListVisible:true
       };
    },
    computed:{
        buttonCaption(){
            return this.taskListVisible ? 'Hide List' : 'Show List';
        }
    },
    methods:{
        addValue(){
            this.tasks.push(this.enteredValue);
        },
        showHideTaskList(){
            this.taskListVisible=!this.taskListVisible;
        }
    }
   
  });
  
  app.mount('#assignment');