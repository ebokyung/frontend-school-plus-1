import { useReducer, useRef } from 'react';
import './reset.css'
import User from "./User";
import userDataReducer from "./userReducer";

const initialState = {
  users: [
    {id: 1, username: 'test', email: 'public.test@gmail.com', active: true}
  ]
};

function App() {
  const [userData, setUserData] = useReducer(userDataReducer, initialState);
  const formRef = useRef();

  const handleRegister = () => {
    const {username, email} = formRef.current.elements;
    setUserData({type: 'register', username: username.value, email: email.value});
    username.value = '';
    email.value = '';
  }

  const handleActive = (id, isActive) => {
    setUserData({type: 'active', id, isActive});
  }

  const handleDelete = (id) => {
    setUserData({type: 'delete', id});
  }

  return (
    <>
      <form ref={formRef}>
        <input type="text" placeholder='계정명' name='username'/>
        <input type="text" placeholder='이메일' name='email'/>
        <button type="button" onClick={handleRegister}>등록</button>
      </form>
      <ul>
        {userData?.users.map((user) => {
          return <User data={user} id={user.id} handleActive={handleActive} handleDelete={handleDelete}/>
        })}
      </ul>
      <p>활성사용자수:{userData.users.filter(user => user.active).length}</p>
    </>
  );
}
export default App;
