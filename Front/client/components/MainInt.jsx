import React from 'react'
import {getAllUsers, addUser} from '../apiClient'

class MainInt extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      users: []
    }
  }

  componentDidMount () {
    // addUser(null)
    getAllUsers()
      .then(users => {
        this.setState({users})
      })
  }

  render () {
    // console.log('this.state.user', this.state.user.name)
    return (
      <div>
        <h2>Here is list of users</h2>
        {this.state.users.map(users => (
          <div key={users.id}>
            <span className='username'>{users.name}</span><br />
            <span className='useremail'>Email: </span><span className='useremailadd'>{users.email}</span><br />
          </div>
        ))}
      </div>
    )
  }
}

export default MainInt