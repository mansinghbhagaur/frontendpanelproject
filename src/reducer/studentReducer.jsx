export const studentReducer = (state, action) => {
      switch (action.type) {
            case 'ADD_STUDENT': return [...state, { id: Date.now(), ...action.payload }];
            case 'EDIT_STUDENT': return state.map((item) =>
                  action.payload.id === item.id ? { ...item, ...action.payload } : item
            );
            case 'DELETE_STUDENT': return state.filter((item) => item.id !== action.payload.id);
            default: return state;
      }
}