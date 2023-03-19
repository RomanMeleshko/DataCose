
// state
export const state = () => ({
    info: [],
    arr_result: [],
    user: null
})

// actions
export const actions = {

    getInfo: async function( context ) {

        let data;
        let result_arr;

        data = await fetch("https://jsonplaceholder.typicode.com/posts");

        result_arr = await data.json();

        context.commit( "setInfo", result_arr );

    },

    getInfoUsers: async function( context, user ) {

        let data;
        let result;

        data = await fetch("https://jsonplaceholder.typicode.com/users/" + user);

        result = await data.json();

        context.commit( "setInfoUser", result );

        // console.log( result );

    }

}

// mutations
export const mutations = {

    setInfo( state, arr ) {
        state.info = arr;
        state.arr_result = arr;
    },

    filterTable( state, value ) {

        let get_new_arr;

        get_new_arr = state.info.filter(elem =>
            elem.title.includes( value )
        );

        state.arr_result = get_new_arr;

    },

    setInfoUser( state, user ) {
        state.user = user;

        user.name ? alert( user.name ) : false;
    }

}

// getters
export const getters = {

    pullInfo( state ) {
        return state.arr_result;
    },

    pullUser( state ) {
        return state.user;
    }

}
