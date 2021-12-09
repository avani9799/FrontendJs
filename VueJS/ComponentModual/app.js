const app=Vue.createApp({
    data(){
        return{
            
            friends:[
                {
                    id:'Avni',
                    name:'Avni Sangani',
                    phone:'98988 90909',
                    email:'avni@gmail.com'
                },
                {
                    id:'khyati',
                    name:'Khyati Patel',
                    phone:'97988 90809',
                    email:'khyati@gmail.com'
                },
            ]
        };
    },
});

app.component('friend-contact',{
    template:`
    <li v-for="friend in friends" :key="friend.id">
    <h2>{{friend.name}}</h2>
    <button @click="toggleDetails()">{{detailsAreVisible? 'Hide' : 'Show'}} Details</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{friend.phone}}</li>
      <li><strong>Email:</strong> {{friend.email}}</li>
    </ul>
  </li>
    `,
    data(){
        return { detailsAreVisible:false, }
    },
    methods:{
        toggleDetails(){
            this.detailsAreVisible=!this.detailsAreVisible;
        }
    }
});

app.mount('#app');