<template>
  <div id="app">
    <MHeader/>
    <Tab/>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import MHeader from './components/m-header/m-header.vue'
import Tab from './components/tab/tab.vue'

export default {
  name: 'App',
  components: {
    MHeader,
    Tab
  }
}
</script>
