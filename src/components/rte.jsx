import React from 'react';

class RichTextEditor extends React.Component {

  componentDidMount() {
    const {
      id
    } = this.props;

    window.tinymce.init({
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
