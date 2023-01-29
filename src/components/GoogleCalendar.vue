<template>
  <h1>{{ $route.name }}</h1>
  <v-container>
    <v-row justify="center" class="ma-5">
      <v-col xs="12" sm="9">
        <h1>{{ $route.name }}</h1>
        <DxScheduler
          time-zone="America/Los_Angeles"
          :data-source="dataSource"
          :current-date="currentDate"
          :views="views"
          :height="600"
          :start-day-hour="9"
          current-view="day"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import DxScheduler from 'devextreme-vue/scheduler';
import CustomStore from 'devextreme/data/custom_store';


export default {
  name: "GoogleCalendar",
  components: {
    DxScheduler,
  },
  data() {
    return {
      views: ['day', 'workWeek', 'month'],
      currentDate: new Date(),
      dataSource: new CustomStore({
        load: (options) => this.getData(options, { showDeleted: false }),
      }),
    };
  },
  methods: {
    getData(_, requestOptions) {
      const PUBLIC_KEY = process.env.VUE_APP_PUBLIC_KEY;
      const CALENDAR_ID = process.env.VUE_APP_CALENDAR_ID;
      const dataUrl = ['https://www.googleapis.com/calendar/v3/calendars/',
        CALENDAR_ID, '/events?key=', PUBLIC_KEY].join('');

      return fetch(dataUrl, requestOptions).then(
        (response) => response.json(),
      ).then((data) => data.items);
    },
  },
}
</script>

<style scoped>

</style>
