import { useDispatch } from "react-redux";
import { login } from "../features/user";

function Login() {
  const dispatch = useDispatch();

  interface User {
    name: string;
    age: number;
    email: string;
  }

  const user: User = {
    name: "Tim",
    age: 38,
    email: "tim@aol.com",
  };

  return (
    <div>
      <button
        onClick={() => {
          dispatch(login(user));
        }}
      >
        Login
      </button>
    </div>
  );
}
export default Login;
