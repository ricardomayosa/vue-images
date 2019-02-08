<template>
  <div id="app">
    <div>
      <AppHeader></AppHeader>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader'

export default {
  name: 'app',
  components: {
    AppHeader,
  }
}
</script>

<style scoped>

</style>

