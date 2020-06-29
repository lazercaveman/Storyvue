const state = {
  knobData: [],
  storyItems: [],
};

const getters = {
  knobData: () => state.knobData,
  storyItems: () => state.storyItems,
};

const mutations = {
  // eslint-disable-next-line
  setKnobs: (state: any, data: Array<string>) => {
    state.knobData = data;
  },
  // eslint-disable-next-line
  setStoryItems: (state: any, data: any) => {
    state.storyItems.push(data);
  },
};

const actions = {
  updateKnobsData: ({ commit }: {commit: Function}, data: Array<string>) => {
    commit('setKnobs', data);
  },
  updateStoryItems: ({ commit }: {commit: Function}, data: Array<string>) => {
    commit('setStoryItems', data);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
