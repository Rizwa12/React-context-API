export const reducer = (state, action) => {
  
    switch (action.type) {
        case "ADD": {
            return { ...state, mynum:state.mynum+1 }
          }
          case "SUB": {
            return { ...state, mynum:state.mynum-1 }
          }
      case "USER_LOGIN": {
        return { ...state, user: action.payload }
      }
      case "USER_LOGOUT": {
        return { ...state, user: null } 
      }
      case "CHANGE_THEME": {
        return { ...state, darkTheme: !state.darkTheme }
      }
      default: {
       return state
      }
    }
  }