<script>
  import axios from 'axios';

  export default{
    data(){
      return{
        quotes: [],
      }
    },
    mounted(){
      if (this.quotes.length == 0) {
        axios.get('https://animechan.vercel.app/api/random')
            .then(ress => (this.quotes.push(ress.data)))
            .catch(err => console.log(err));
      } else {
        return;
      }
    },
    methods:{
      newQuote(){
        // reset the array quotes to zero
        this.quotes.splice(0);
        // get the new quote
        axios.get('https://animechan.vercel.app/api/random')
            .then(ress => (this.quotes.push(ress.data)))
            .catch(err => console.log(err));
      }
    }
  }
</script>

<template>
  <section class="w-full h-screen overflow-auto flex items-center justify-center">
    <div>
      <div v-if="quotes.length > 0">
        <!-- card -->
        <div v-for="data in quotes" v-bind:key="data" class="px-5 lg:w-2/3 mx-auto mb-10">
          <p class="article-text mb-2">
            {{ data.quote }}
          </p>
          <p class="secondary-text text-right">
            - {{ data.character }}
          </p>
        </div>
        <!-- card -->

        <!-- card controller -->
        <div class="w-2/3 mx-auto flex justify-center">
          <button @click="newQuote()" class="px-4 bg-red-500 text-white tracking-wider">Next</button>
        </div>
        <!-- card controller -->
      </div>

      <div class="text-center" v-else>
        <span class="tracking-wider animate-pulse">Please wait, you son of a bitch.</span>
      </div>
    </div>
  </section>  
</template>