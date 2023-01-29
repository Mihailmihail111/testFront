<template>
  <v-navigation-drawer permanent>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h6">
          Task Manager
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list
      dense
      nav
    >
      <v-list-item
        v-for="item in items"
        :key="item.title"
        link
      >
        <v-list-item-content>
          <router-link :to="item.url" >
            <v-list-item-title>
              <v-icon>{{ item.icon }} </v-icon>
              {{ item.title }}
            </v-list-item-title>
          </router-link>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  name: "Navbar",
  data () {
    return {
      items: [
        { title: 'Task List', icon: 'mdi-format-list-bulleted-square', url: '/' },
        { title: 'New Task', icon: 'mdi-file-plus-outline', url: '/new-task' },
        { title: 'Add events to google calendar', icon: 'mdi-calendar', url: '/add-events-to-google-calendar' },
      ],
      right: null,
    }
  },
}
</script>

<style scoped>
  a {
    text-decoration: none;
    color: inherit;
  }
</style>
