import api from '../../api/imgur';

const state = {
    images: []
};

const getters = {
    allImages: (state) => state.images
        // '!!' Turns value into boolean -> True if !null
};

const actions = {
    async fetchImages( { rootState, commit } ) {
        const { token } = rootState.auth;
        const res = await api.fetchImages(token);
        commit('setImages', res.data.data);
    },
    uploadImage: () => {
        
    },
    // setImages: ( { commit }, hash) => {
        
    // }
};

const mutations = {
    setImages: (state, images) => {
        state.images = images;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}