const app = Vue.createApp({
    //data functions
    //template: '<h2>I am the template</h2>'
    data(){
        return{
           
            url: 'https://newsapi.org/v2/top-headlines?country=hk&apiKey=a5ecf0100b0149e6a1406584949890a8&pagesize=20',
            articles: [],
            articlesCount: []
           
        }
   
    },
    mounted(){

        axios.
        get(this.url)
        .then( (response) => {{
                this.articles = response.data.articles
               // this.articlesCount = this.articles
                 
              }

        })
     

      },
    
})

app.mount('#container')