import React from 'react';
import UserContext from '../utils/UserContext';

class UserClass extends React.Component {

  constructor(props) {
    console.log('constructor');
    super(props);
    this.state = {
      count: 0
    }
  }

  componentDidMount() {
    console.log('componentDidMount');
    // all APIS are called here
  }

  componentDidUpdate() {

  }

  componentWillUnmount() {

  }

  render() {
    console.log('render');
    return (
      <div className="user-card">
        <h2>Name:{this.props.name}</h2>
        <h3>Location: Bengaluru</h3>
        <div>
          <UserContext.Consumer>
            {({ userName }) => <h3 className='text-xl font-bold'>{userName}</h3>}
          </UserContext.Consumer>
        </div>
        <p>count: {this.state.count}</p>
        <button onClick={() => {
          this.setState({
            count: this.state.count + 1
          })
        }}>Update count</button>
      </div>
    )
  }
}

export default UserClass;