<template>
  <div class="w-full bg-black text-white text-base tracking-mid uppercase relative">
    <div class="sm:w-3/4 md:w-2/3 sm:mx-auto relative">
      <Header />
      <Main />
      <Footer />
    </div>
    <Overlay class="drop-shadow-lg sticky bottom-0" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'B-SIDE',
      descr: 'B-SIDE is dedicated to underground electronic music underrepresented in the Copenhagen scene. As on the B-Side of a record, a release that typically gets less attention, during the night artists are given the opportunity to play multiple sets, with a focus on something different from their usual style.'
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
