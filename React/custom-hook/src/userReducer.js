export default function userDataReducer(userData, action) {
    switch(action.type) {
      case 'register': {
        const { username, email } = action;
        const id = userData.users.length;
        return {
          users: [...userData.users, {id, username, email, active: false}]
        }
      }
      case 'delete': {
        const { id } = action;
        const newUserArr = [...userData.users].filter(item => item.id !== id);
        return {
          users: newUserArr
        }
      }
      default: {
        throw Error('알 수 없는 타입');
      }
      
  }
}