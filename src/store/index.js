
// state
export const state = () => ({
    info: [],
    arr_result: [],
    user: null,
    info_todos: [],
    arr_result_todos: [],
    user_todos: null
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

        data = await fetch("https://jsonplaceholder.typicode.com/users/" + user );

        result = await data.json();

        context.commit( "setInfoUser", result );

    },

    getInfoTodos: async function( context ) {

        let data;
        let result_todos;

        data = await fetch("https://jsonplaceholder.typicode.com/todos");

        result_todos = await data.json();

        context.commit( "setInfoTodos", result_todos );

    },

    getInfoUsersTodos: async function( context, user ) {

        let data;
        let result;

        data = await fetch(" https://jsonplaceholder.typicode.com/users/" + user );

        result = await data.json();

        context.commit( "setInfoTodosUsers", result );

    }

}

// mutations
export const mutations = {

    setInfo( state, arr ) {
        state.info = arr;
        state.arr_result = arr;
    },

    filterTable( state, value ) {

        console.log( "todos" + value );

        let get_new_arr;
        let get_new_todos;

        // Filter table Posts
        get_new_arr = state.info.filter(elem =>
            elem.title.includes( value )
        );

        // Filter table Todos
        get_new_todos = state.info_todos.filter(elem =>
            elem.title.includes( value )
        );

        state.arr_result = get_new_arr;

        state.arr_result_todos = get_new_todos;

    },

    setInfoUser( state, user ) {
        state.user = user;

        user.username ? alert( user.username ) : false;
    },

    setInfoTodos( state, arr ) {
        state.info_todos = arr;
        state.arr_result_todos = arr;
    },

    setInfoTodosUsers( state, user ) {
        state.user_todos = user;

        user.username ? alert( user.username ) : false;
    }

}

// getters
export const getters = {

    pullInfo( state ) {
        return state.arr_result;
    },

    pullUser( state ) {
        return state.user;
    },

    pullInfoTodos( state ) {
        return state.arr_result_todos;
    },

    pullUserTodos( state ) {
        return state.user_todos;
    }

}
