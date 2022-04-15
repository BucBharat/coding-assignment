<template>
  <div ref="modal" id="modalID">
    <img :src="user.image" max-width="200" max-height="400" />
    <div id="details">
      <p>{{ user.name }}</p>
      <p>{{ user.email }}</p>
      <p>{{ user.phone }}</p>
      <p>{{ user.address.city }}, {{ user.address.street }}</p>
      <p>{{ user.website }}</p>
    </div>
    <h2 @click="closeModal">X</h2>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      required: true,
    },
  },
  methods: {
    closeModal() {
      this.$emit('close-modal');
    },
  },
};
</script>

<style scoped>
#modalID {
  background-color: black;
  color: white;
  box-shadow: 0 4px 8px 0 rgba(200, 200, 200, 0.2);
  display: flex;
  height: 40vh;
  width: 40vw;
  position: absolute;
}
#details {
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  align-content: flex-start;
  width: 25vw;
}
h2 {
  position: relative;
  color: white;
  top: 0;
  right: 0;
  margin-right: 10px;
}
</style>
