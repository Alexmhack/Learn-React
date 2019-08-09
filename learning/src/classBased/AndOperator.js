import React from 'react'

class AndOperator extends React.Component {
  constructor() {
    super()

    this.state = {
      unreadMessages: []
    }
  }

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
