import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { toast } from "react-toastify";
import { register, reset } from "../features/auth/authSlice.js";
import Spinner from "../components/Spinner.js";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmePassword: "",
  });
  const { name, email, password, confirmePassword } = formData;

  const nagivate = useNavigate();
  const dispatch = useDispatch();

  const { user, isSuccess, isError, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
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

    if (
      !name.trim() ||
      !email.trim() ||
      !password.trim() ||
      !confirmePassword.trim()
    ) {
      toast.error("Fill in all the fields");
    } else if (password !== confirmePassword) {
      toast.error("Passwords do not match");
    } else {
      const userData = {
        name,
        email,
        password,
      };
      dispatch(register(userData));
    }
  };

  if (isLoading) return <Spinner />;

  return (
    <section className="heading">
      <h1>
        <FaUser /> Register
      </h1>
      <p>Create an account</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Enter name"
          />
        </div>
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
          <input
            type="password"
            name="confirmePassword"
            value={confirmePassword}
            onChange={handleChange}
            placeholder="Confirm password"
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

export default Register;
