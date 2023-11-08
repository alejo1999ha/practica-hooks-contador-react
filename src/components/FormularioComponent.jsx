import { useForm } from "../hooks/useForm";

export const FormularioComponent = () => {
  const initialForm = {
    userName: "",
    email: "",
    password: "",
  };

  const { formState, userName,email,password, onInputChange } = useForm(initialForm);
 

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(formState)
    
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="userName">User Name</label>
        <input
          type="text"
          className="form-control"
          name="userName"
          id="userName"
          placeholder="Enter your Username"
          value={userName}
          onChange={onInputChange}
          autoComplete="userName"
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          className="form-control"
          name="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={onInputChange}
          autoComplete="email"
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          name="password"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={onInputChange}
          autoComplete="current-password"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
