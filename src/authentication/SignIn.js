import { Component } from "react";


// lam trang dang nhap
class SignIn extends Component {

  // khoi tao phuong thuc hanldeChange
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  // khoi tao phuong thuc handleSubmit
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  }


  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Sign In</h5>

          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0" type="submit">Sign In</button>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn;
