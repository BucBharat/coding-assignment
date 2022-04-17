<template>
  <div id="pageLayout">
    <div id="sideBar">
      <p>company name</p>
      <MenuElement />
      <MenuElement />
      <MenuElement />
      <button id="signOut" @click="signOut">signout</button>
    </div>
    <div id="imageBox" class="users">
      <div
        id="indImage"
        :class="modalDisplay ? 'blur' : ''"
        v-for="user in users"
        :key="user.id"
      >
        <img
          :src="user.image"
          width="400"
          height="600"
          @click="showModal(user)"
        />
        <div id="details">
          <h4>{{ user.name }}</h4>
          <p>{{ user.address.city }}</p>
        </div>
      </div>
    </div>
    <div v-if="this.currentUser != null">
      <Modal
        :class="modalDisplay ? 'displayClass' : 'nonDisplayClass'"
        :user="currentUser"
        @close-modal="closeModal"
      />
    </div>
  </div>
</template>

<script>
import EventService from '../Services/EventService';
import MenuElement from '../components/MenuElement.vue';
import Modal from '../components/Modal.vue';
export default {
  components: {
    MenuElement,
    Modal,
  },
  data() {
    return {
      users: [],
      modalDisplay: false,
      currentUser: null,
    };
  },
  methods: {
    showModal(user) {
      this.modalDisplay = true;
      //   this.modalDisplay = !this.modalDisplay;
      //   console.log(this.modalDisplay);
      this.currentUser = user;
    },
    closeModal() {
      this.modalDisplay = false;
      this.currentUser = null;
    },
    signOut() {
      localStorage.removeItem('accessToken');
      this.$router.push({ name: 'Login' });
    },
  },
  created() {
    EventService.getUsers()
      .then(response => {
        this.users = response.data;
      })
      .catch(error => {
        console.log('There was an error:', error.response);
      });
  },
};
</script>

<style scoped>
/* #signout {
  position: sticky;
} */

.blur {
  /* background-color: rgba(0, 0, 0, 0.2); */
  opacity: 0.5;
}
.displayClass {
  /* position: relative; */
  /* opacity: 1; */
  position: fixed !important;
  top: 45vh;
  left: 45vw;
}

.nonDisplayClass {
  display: none;
}
#imageBox {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 80vw;
}
#indImage {
  padding-right: 4;
  position: relative;
  /* position: relative */
}
#pageLayout {
  display: flex;
}
#sideBar {
  width: 20vw;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: sticky !important;
  top: 0;
}
#signOut {
  margin-top: auto;
}
img:hover {
  /* webkit-filter: blur(2px); Chrome, Safari, Opera */
  /* filter: blur(2px); */
  opacity: 0.5;
  /* background-color: black; */
}
#indImage:hover {
  cursor: pointer;
}
#indImage div {
  position: absolute;
  bottom: 0;
  right: 0;
  background: black;
  color: white;
  margin-bottom: 5px;
  font-family: sans-serif;
  opacity: 0;
  visibility: hidden;
  -webkit-transition: visibility 0s, opacity 0.5s linear;
  transition: visibility 0s, opacity 0.5s linear;
}
#indImage:hover div {
  width: 150px;
  padding: 8px 15px;
  visibility: visible;
  opacity: 0.7;
}
@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  #sideBar {
    display: none;
  }
  .displayClass {
    /* position: relative; */
    position: fixed !important;
    top: 15%;
    left: 15%;
  }
}
@media only screen and (max-width: 1295px) and (min-width: 768px) {
  /* For mobile phones: */
  #sideBar {
    display: none;
  }
  .displayClass {
    /* position: relative; */
    position: fixed !important;
    top: 10%;
    left: 10%;
  }
}
</style>
