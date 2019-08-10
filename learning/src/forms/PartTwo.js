import React, {Component} from 'react'

// react textarea does not have a closing tag.
// instead use value prop to set values

class PartTwo extends Component {
  render() {
    return (
      <div className='container pt-5'>
        <div className='row'>
          <div className='col-md-6 offset-md-3'>
            <div className="form-group">
              <label htmlFor="textarea1">Example textarea</label>
              <textarea
                className="form-control"
                id="textarea1"
                rows="3"
                value={"This is the sample value for text area."}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PartTwo
