import React from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/python';
import 'brace/theme/github';


class AceCodeEditor extends React.Component {
  onChange = (newValue) => {
    console.log('change',newValue);
  }

  render () {
    return <AceEditor
      mode="python"
      theme="github"
      onChange={this.onChange}
      name="UNIQUE_ID_OF_DIV"
      editorProps={{$blockScrolling: true}}
    />
  }
}

export default AceCodeEditor
