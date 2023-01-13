<script>
  import navPart from './components/navPart.vue';
  import footerPart from './components/footerPart.vue';
  
  export default {
      components:{
        footerPart,
        navPart,
      }
  }
</script>

<template>
  <section class="max-w-3xl mx-auto relative">
    <navPart/>
    <main>
      <router-view/>
    </main>
    <footerPart/>
  </section>
</template>