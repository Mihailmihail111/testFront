<template>
  <v-container>
    <v-row justify="center" class="ma-5">
      <v-col xs="12" sm="8">
        <v-alert
          dense
          v-if="success"
          type="success"
        >
         task is done success
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
          <v-list>
            <v-card-text>You have {{ tasks.length }} Tasks, add some</v-card-text>
              <v-list-item v-for="task in tasks">
                  <v-checkbox v-model="task.completed" @change="updateTask(task.id, task.completed)">
                    <template v-slot:label>
                      <div>
                        <v-list-item-title> {{ task.title }}</v-list-item-title>
                      </div>
                    </template>
                  </v-checkbox>
              </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "TaskList",
  data() {
    return {
      success: false,
      errorAlert: false,
      errorMessages: "",
      tasks: [],
    };
  },
  async mounted() {
    const response = await axios.get(process.env.VUE_APP_API_URL + "/api/tasks");
    response.data.forEach((task) => {
      task.completed = task.completed === 1;
    });
    this.tasks = response.data.sort((a, b) => b.id - a.id);
  },
  methods: {
    async updateTask(taskId, completed) {
      await axios.put(process.env.VUE_APP_API_URL + "/api/tasks/" + taskId, {
        completed: completed,
      }).then((response) => {
        this.success = true;
        setTimeout(() => {
          this.success = false;
        }, 2000);
      }).catch((error) => {
        this.errorMessages = error.response.data.message;
        this.errorAlert = true;
        setTimeout(() => {
          this.errorAlert = false;
        }, 2000);
      });
    }
  },
}
</script>

<style scoped>

</style>
