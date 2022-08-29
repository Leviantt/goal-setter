import { useState, useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset } from "../features/auth/authSlice.js";
import Spinner from "../components/Spinner.js";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const nagivate = useNavigate();
  const dispatch = useDispatch();

  const { user, isSuccess, isError, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      console.log('in Login.js if(isError)');
      toast.error(message);
    }
  
    if (isSuccess || user) {
      console.log('in Login.js if(isSuccess || user)');
      console.log(`isSuccess: ${isSuccess}`);
      console.log(`user: ${user}`);
      nagivate("/");
    }

    dispatch(reset());
  }, [user, isSuccess, isError, message, dispatch, nagivate]);

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      toast.error("Fill in all the fields");
    } else {
      const userData = {
        email,
        password,
      };
      dispatch(login(userData));
    }
  };

  if (isLoading) return <Spinner />;

  return (
    <section className="heading">
      <h1>
        <FaSignInAlt /> Login
      </h1>
      <p>Login and start setting goals!</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="Enter password"
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-block">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}

export default Login;
