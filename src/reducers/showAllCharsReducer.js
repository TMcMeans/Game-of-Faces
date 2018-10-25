const initialState = [] 

export const showAllCharsReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SHOW_ALL_CHARS': 
    return action.chars
    default: 
      return state 
  }
}