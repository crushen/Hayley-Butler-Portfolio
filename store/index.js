export const state = () => ({
  url: 'https://api-eu-central-1.graphcms.com/v2/ckf40go6i08c401w60b35drdt/master',
  biography: null
})

export const actions = {
  async getBiography({state, commit}) {
    try {
      const response = await fetch(
        state.url, 
        {
          method: 'POST',
          body: JSON.stringify({
            query: `
              {
                biographies {
                  text
                }
              }
            `
          })
        }
      );
      const { data } = await response.json();
      commit('setBiography', data.biographies);
    } catch(error) {
      console.log(error);
    }
  }
}

export const mutations = {
  setBiography(state, bio) {
    state.biography = bio[0]
  }
}
