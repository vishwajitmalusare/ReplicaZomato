import React from 'react';
import "./Login.css";

class Login extends React.Component {
  
    state = {
      mobileNo: "",
    };

    handleChange = e => {
      const { name, value} = e.target;
      this.setState({ [name]: value });
    };

    handleSubmit = e => {
      e.preventDefault();
      this.props.Login(true);
      this.setState({ mobileNo: "" });
    };
    render () {
      const { mobileNo } = this.state;
    return(
    <div className="login-div">
      <div className="logo-div">
      </div>
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Mobile Number:
            <input
            className = "input"
            type="text"
            placeholder="Mobile Number..."
            name="mobileNo"
            required
            onChange={this.handleChange}
            value={mobileNo}
          />
          </label>
          <button className = "button" onSubmit={this.handleSubmit}>Log in</button>

            <button className = "buttonSocial" >Google</button>
            <button className = "buttonSocial" >Facebook</button>
        </form>
      </div>
    </div>  
    );
  }
}

export default Login;
