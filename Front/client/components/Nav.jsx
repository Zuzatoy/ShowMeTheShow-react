import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <h1>Me</h1>
      <Link to='/mainint'><h1>Others</h1></Link>
    </div>
  )
}

export default Nav
