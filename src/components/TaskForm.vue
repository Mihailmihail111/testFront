<template>
  <v-container>
    <v-row justify="center" class="ma-5">
      <v-col xs="12" sm="8">
        <v-alert
          dense
          v-if="success"
          type="success"
        >
          task is create success
        </v-alert>
        <v-alert
          dense
          outlined
          v-if="errorAlert"
          type="error"
        >
          {{ errorMessages }}
        </v-alert>
        <h1>{{ $route.name }}</h1>
        <v-card>
          <v-form>
            <v-text-field
              v-model="title"
              label="Task Name"
              :counter="100"
              required
            ></v-text-field>
            <v-textarea
              v-model="description"
              :counter="256"
              label="Task Description"
              required
            ></v-textarea>
            <v-btn color="primary" class="mr-4" @click.prevent="createTask()">Submit</v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "TaskForm",
  data() {
    return {
      success: false,
      errorMessages: "",
      errorAlert: false,
      title: "",
      description: "",
    };
  },
  methods: {
    async createTask() {
      await axios.post(process.env.VUE_APP_API_URL + "/api/tasks", {
        title: this.title,
        description: this.description,
      }).then((response) => {
        this.success = true;
        this.title = "";
        this.description = "";
        setTimeout(() => {
          this.success = false;
        }, 3000);

      }).catch((error) => {
        this.errorAlert = true;
        this.errorMessages = error.response.data.errors;
        setTimeout(() => {
          this.errorAlert = false;
        }, 3000);
      });
    }
  }
}
</script>

<style scoped>

</style>
