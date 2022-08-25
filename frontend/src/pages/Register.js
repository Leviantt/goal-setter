import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmePassword: "",
  });
  const { name, email, password, confirmePassword } = formData;

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  }

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
      </form>
    </section>
  );
}

export default Register;
