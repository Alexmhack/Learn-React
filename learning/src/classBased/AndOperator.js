import React from 'react'

class AndOperator extends React.Component {
  constructor() {
    super()

    this.state = {
      unreadMessages: [1, 2, 3, 4]
    }
  }

  // &&
  // false && false
  // js checks the first condition in && operator
  // if first is false the return false
  // true && false
  // if first is true the return the second condition which if false in above case.

  render() {
    return (
      <div>
        {
          this.state.unreadMessages.length > 0 &&
            <h2>You have {this.state.unreadMessages.length} unread messages.</h2>
        }
      </div>
    )
  }
}

export default AndOperator
