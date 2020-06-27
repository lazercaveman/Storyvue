const state = {
  knobData: [],
};

const getters = {
  knobData: () => state.knobData,
};

const mutations = {
  // eslint-disable-next-line
  setKnobs: (state: any, data: object) => {
    state.knobData = data;
  },
};

const actions = {
  updateKnobsData: ({ commit }: {commit: Function}, data: Array<object>) => {
    commit('setKnobs', data);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
