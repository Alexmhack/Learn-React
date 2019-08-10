import React, {Component} from 'react'

class PartTwo extends Component {
  render() {
    return (
      <div className='container pt-5'>
        <div className='row'>
          <div className='col-md-6 offset-md-3'>
            <div className="form-group">
              <label htmlFor="textarea1">Example textarea</label>
              <textarea className="form-control" id="textarea1" rows="3"></textarea>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PartTwo
