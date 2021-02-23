<template>
  <v-app>
    <v-toolbar app>

    </v-toolbar>

    <v-content>
      <Messages/>
    </v-content>
  </v-app>
</template>

<script>
import Messages from './components/Messages'

export default {
  name: 'App',
  components: {
    Messages
  },
  data () {
    return {
      //
    }
  }
}
</script>
