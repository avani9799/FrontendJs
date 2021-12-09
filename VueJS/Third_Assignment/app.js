Vue.createApp({
    data(){
        return{
            count:0
        };
    },
    watch:{
        
    },
    computed:{
        result(){
            if(this.count < 37){
                return "Not There Yet";
            }else if(this.count === 37){
                return this.count;
            }else{
                return "Too Much!!!!!";
            }
        }
    },
    methods:{
        addValue(num){
            this.count+=num;
        },
    }
}).mount('#assignment');;

