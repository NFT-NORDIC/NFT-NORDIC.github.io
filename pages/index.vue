<template>
  <div class="w-full font-roboto font-normal">
    <Header />
    <Main />
    <Footer />
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
