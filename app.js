const app = Vue.createApp({
    //data functions
    //template: '<h2>I am the template</h2>'
    data(){
        return{
           
            url: 'https://newsapi-topnews-hk.herokuapp.com/v1/topnews',
            articles: [],
            articlesCount: []
           
        }
   
    },
    mounted(){

        axios.
        get(this.url)
        .then( 
           
           

        )
        .then( (response) => {{
                this.articles = response.data.articles
               // this.articlesCount = this.articles
                 
              }

        })
        
     

      },
    
})

app.mount('#container')
