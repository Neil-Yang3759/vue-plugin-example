<template>
  <div>
    <h1>Demo Page 123</h1>
    <!-- <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*rna7_6qHSzp9uABxE1slgA.png" alt="asd"> -->
    <button @click="open">open</button>
  </div>
</template>

<script>
export default {
  methods: {
    open() {
      this.$dialog({
        title: 'foo',
        content: 'bar',
      })
    },
  },
}
</script>

<!-- <style lang="sass" type="text/sass" scoped></style> -->
