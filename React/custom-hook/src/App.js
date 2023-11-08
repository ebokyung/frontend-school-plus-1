import User from "./User";
import './reset.css'
import { useReducer, useRef } from 'react';
import userDataReducer from "./userReducer";

function App() {
  const formRef = useRef();
  const initialState = {
    users: [
      {id: 1, username: 'test', email: 'public.test@gmail.com', active: true}
    ]
  };

  const [userData, setUserData] = useReducer(userDataReducer, initialState);
  console.log(userData)

  const handleRegister = () => {
    const {username, email} = formRef.current.elements;
    setUserData({type: 'register', username: username.value, email: email.value});
    username.value = '';
    email.value = '';
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
          return <User data={user} />
        })}
      </ul>
      <p>활성사용자수:</p>
    </>
  );
}
export default App;
