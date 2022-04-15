<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>Creating home page currently</h1>
    <!-- <form @submit.prevent="createEvent">
      <div class="field">
        <label>Username</label>
        <input
          v-model="username"
          type="text"
          placeholder="Add an event title"
        />
      </div>

      <div class="field">
        <label>Password</label>
        <input
          v-model="password"
          type="password"
          placeholder="Add a description"
        />
      </div>

      <input type="submit" class="button -fill-gradient" value="Submit" />
    </form> -->
    <h4>Sign in your current account</h4>
    <form id="login-form" @submit.prevent="detailsSubmit">
      <input
        type="text"
        name="username"
        v-model="usernameValue"
        id="username-field"
        class="login-form-field"
        placeholder="Username"
      />
      <input
        type="password"
        name="password"
        v-model="passwordValue"
        id="password-field"
        class="login-form-field"
        placeholder="Password"
      />
      <div id="checkboxDiv">
        <input type="checkbox" value="test" v-model="selected" />
        <div>Keep me signed in</div>
      </div>

      <input type="submit" value="SIGN IN" id="login-form-submit" />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usernameValue: '',
      passwordValue: '',
      selected: false,
    };
  },
  methods: {
    detailsSubmit() {
      if (this.usernameValue === 'admin' && this.passwordValue === '1234') {
        alert('login successfull');
      } else {
        alert('Entered wrong details');
        this.usernameValue = '';
        this.passwordValue = '';
      }
    },
  },
};
</script>

<style scoped>
#login-form {
  align-self: flex-start;
  display: grid;
  justify-items: center;
  align-items: center;
}

.login-form-field::placeholder {
  color: #3a3a3a;
}

.login-form-field {
  border: none;
  border-bottom: 1px solid #3a3a3a;
  margin-bottom: 10px;
  border-radius: 3px;
  outline: none;
  padding: 0px 0px 5px 5px;
}

#login-form-submit {
  /* width: 100%; */
  padding: 7px;
  border: none;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  background-color: #3a3a3a;
  cursor: pointer;
  outline: none;
}

#checkboxDiv {
  display: flex;
}
</style>
