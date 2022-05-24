<template>
  <div class="w-full font-roboto font-normal">
    <Header />
    <Main />
    <Footer />
    <div class="absolute top-0 md:left-0 left-0.5 md:w-10 w-4 bg-lside h-full"></div>
    <div class="absolute top-0 md:right-0 right-0.5 md:w-10 w-4 bg-rside h-full"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'NFT NORDIC',
      descr: ''
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        {
          hid: this.descr,
          name: this.descr,
          content: this.descr
        }
      ]
    }
  }
}
</script>
