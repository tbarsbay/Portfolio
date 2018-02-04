function reducerFactory(handlers = {}, initialState = {}) {
    return function reducer(state = initialState, action) {
        if (typeof handlers[action.type] === 'function') {
            return handlers[action.type](state, action.payload);
        }

        return state;
    };
}
  
export default reducerFactory;