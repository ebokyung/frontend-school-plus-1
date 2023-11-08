export default function userDataReducer(userData, action) {
    switch(action.type) {
      case 'register': {
        const { username, email } = action;
        const id = userData.users.length + 1;
        return {
          users: [...userData.users, {id, username, email, active: false}]
        }
      }
      case 'active': {
        const { id, isActive } = action;
        const updateUser = [...userData.users].map(item => {
          if(item.id === id) return {...item, active: isActive};
          else return item;
        })
        console.log(updateUser)
        return {
          users: updateUser
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