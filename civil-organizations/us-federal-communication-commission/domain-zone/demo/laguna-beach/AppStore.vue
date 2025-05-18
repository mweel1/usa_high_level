<template>
  <div class="app-store">
    <div className="flex h-[300px] w-[300px]">
      <div className="border rounded-md border-white h-[300px] w-[400px]">
        Hi there
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppStore",
  data() {
    return {
      sphere: [
        {
          id: 1,
          label: "YellowStone National Park",
          apps: [
            {
              name: "Weather",
              icon: "",
              type: "cat",
              items: [
                {
                  name: "App",
                  icon: "",
                  type: "Current Conditions",
                  items: [],
                },
              ],
            },
            ,
          ],
        },
      ],
    };
  },
  methods: {
    // Add your component methods here
  },
  computed: {
    // Add your computed properties here
  },
  mounted() {
    // Add your mounted logic here
  },
};
</script>

<style scoped>
.app-store {
  text-align: center;
  padding: 20px;
}

.app-store h1 {
  font-size: 2em;
  margin-bottom: 10px;
}

.app-store p {
  font-size: 1.2em;
}

.app-store ul {
  list-style-type: none;
  padding: 0;
}

.app-store li {
  font-size: 1em;
  margin: 5px 0;
}
</style>
