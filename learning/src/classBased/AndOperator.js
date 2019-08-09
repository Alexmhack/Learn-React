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

            <h2>You have {this.state.unreadMessages.length} unread messages.</h2>

        }
      </div>
    )
  }
}

export default AndOperator
