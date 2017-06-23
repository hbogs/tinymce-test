import React from 'react';
import tinymce from 'tinymce/tinymce';

class RichTextEditor extends React.Component {

  componentDidMount() {
    const {
      id
    } = this.props;
 
    tinymce.init({
      inline: false,
      selector: `#${id}`
    });
  }

  render() {
    const {
      id
    } = this.props;

    return (
      <textarea id={id} />
    );
  }
}

export default RichTextEditor;
