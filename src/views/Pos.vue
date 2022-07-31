<template>
  <div>
    <div class="w-full flex flex-col items-center">
      <button
        class="ml-auto mx-5 my-8 rounded bg-purple-700 text-white text-base font-medium px-5 py-3 hover:opacity-80 focus:bg-purple-900"
        @click="showModal"
      >
        Add Record
      </button>

      <div
        class="flex flex-col w-2/3 justify-center rounded border px-5 py-3 mb-5"
      >
        <div class="flex">
          <span class="text-base font-bold">Date</span>
          <span class="text-base font-bold ml-auto">Profits</span>
        </div>
        <div class="border-b flex w-full justify-center"></div>
        <div
          v-for="i in 10"
          :key="i"
          class="flex rounded border py-4 px-3 my-2"
        >
          <span class="text-base font-bold">27, May 2022</span>
          <span class="text-base font-bold ml-auto">N100,000</span>
        </div>
      </div>
      <!-- <font-awesome-icon :icon="['fab', 'linkedin']"/> -->
    </div>
    <div
      v-if="modalVisible"
      class="absolute top-0 left-0 w-full h-full bg-gray-500/50 flex justify-center items-center"
      @click.self="modalVisible = false"
    >
      <div class="w-1/2 bg-white rounded">
        <form class="w-full px-5 py-10">
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-capital"
              >
                Capital
              </label>
              <input
                id="grid-capital"
                v-model.number="capital"
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                type="number"
                placeholder="0.00"
              />
              <p class="text-red-500 text-xs italic">Aswooore</p>
            </div>

            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-capital"
              >
                Expenses
              </label>
              <input
                id="grid-capital"
                v-model.number="expenses"
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                type="number"
                placeholder="0.00"
              />
              <p class="text-red-500 text-xs italic">Aswooore</p>
            </div>

            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-capital"
              >
                Balance
              </label>
              <input
                id="grid-capital"
                v-model.number="balance"
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                type="number"
                placeholder="0.00"
              />
              <p class="text-red-500 text-xs italic">Remaining Fund</p>
            </div>
          </div>
          <div class="w-full flex justify-center items-center">
            <button
              class="w-full md:w-1/2 bg-blue-600 rounded py-3 px-5 text-white font-bold hover:bg-blue-800 delay-75 transition"
              @click="compute"
            >
              Compute
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Pos",
  data() {
    return {
      modalVisible: false,
      capital: 0,
      expenses: 0,
      balance: 0,
      db: null,
    };
  },

  created() {
    let db;
    const request = indexedDB.open("MyTestDatabase", 1);
    request.onerror = (e) => {
      alert(e);
    };
    request.onsuccess = (e) => {
      this.db = e.target.result;
      console.log(db);
    };
  },

  methods: {
    compute() {
      const dbName = "pos_moniepoint";
      const request = indexedDB.open(dbName, 2);
    },
    showModal() {
      this.modalVisible = true;
    },
  },
};
</script>
