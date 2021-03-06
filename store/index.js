export const state = () => ({
  url: 'https://api-eu-central-1.graphcms.com/v2/ckf40go6i08c401w60b35drdt/master',
  biography: null,
  collections: [],
  soloPieces: [],
  exhibitions: []
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
  },
  async getCollections({state, commit}) {
    try {
      const response = await fetch(
        state.url, 
        {
          method: 'POST',
          body: JSON.stringify({
            query: `
              {
                collections {
                  description
                  id
                  subTitle
                  title
                  images {
                    title
                    subTitle
                    id
                    details
                    images {
                      id
                      url
                    }
                  }
                }
              }
            `
          })
        }
      );
      const { data } = await response.json();
      commit('setCollections', data.collections);
    } catch(error) {
      console.log(error);
    }
  },
  async getSoloPieces({state, commit}) {
    try {
      const response = await fetch(
        state.url, 
        {
          method: 'POST',
          body: JSON.stringify({
            query: `
              {
                soloPieces {
                  images {
                    title
                    subTitle
                    details
                    id
                    images {
                      url
                      id
                    }
                  }
                }
              }
            `
          })
        }
      );
      const { data } = await response.json();
      commit('setSoloPieces', data.soloPieces);
    } catch(error) {
      console.log(error);
    }
  },
  async getExhibitions({state, commit}) {
    try {
      const response = await fetch(
        state.url, 
        {
          method: 'POST',
          body: JSON.stringify({
            query: `
              {
                exhibitions {
                  id
                  title
                  subTitle
                  description
                  images {
                    id
                    subTitle
                    title
                    details
                    images {
                      url
                    }
                  }
                }
              }
            `
          })
        }
      );
      const { data } = await response.json();
      commit('setExhibitions', data.exhibitions);
    } catch(error) {
      console.log(error);
    }
  }
}

export const mutations = {
  setBiography(state, bio) {
    state.biography = bio[0]
  },
  setCollections(state, collections) {
    state.collections = collections
  },
  setSoloPieces(state, soloPieces) {
    state.soloPieces = soloPieces
  },
  setExhibitions(state, exhibitions) {
    state.exhibitions = exhibitions
  }
}
