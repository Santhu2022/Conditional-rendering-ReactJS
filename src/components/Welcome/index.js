import './index.css'
import {Component} from 'react'

class Welcome extends Component {
  render() {
    const {name, greeting} = this.props
    return (
      <h1 className="message">
        {greeting}, {name}
      </h1>
    )
  }
}

// const Welcome = props => {
//   const {name, greeting} = props
//   return (
//     <h1 className="message">
//       {greeting}, {name}
//     </h1>
//   )
// }

Welcome.defaultProps = {
  name: 'Santosh',
  greeting: 'Hi',
}

export default Welcome
