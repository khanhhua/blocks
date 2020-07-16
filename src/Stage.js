import React from 'react';

class Stage extends React.Component {
  render() {
    const { props } = this;
    const { className, ...rest } = props;

    return (
      <div className={className}>
        <div className="w-100 h-100 dropzone">
        </div>
      </div>
    );
  }
}

export default Stage;
