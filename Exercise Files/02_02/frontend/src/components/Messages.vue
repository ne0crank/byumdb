<template>
  <div>
    <h4>Messages</h4>
    <ul v-for="message in messages">
      <li>{{message}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      messages: ["hello", "hi", "its working"]
    };
  }
};
</script>