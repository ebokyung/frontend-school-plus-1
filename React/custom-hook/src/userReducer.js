export default function userDataReducer(userData, action) {
    switch(action.type) {
      case 'register': {
        const { username, email } = action;
        const id = userData.users.length;
        return {
          users: [...userData.users, {id, username, email, active: false}]
        }
      }
      default: {
        throw Error('알 수 없는 타입');
      }
      
  }
}