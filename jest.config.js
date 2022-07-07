module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  textMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
  transform: {
    "^.+\\.vue$": "vue-jest",
  },
};
