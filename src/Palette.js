import React from 'react';
import { connect } from 'react-redux';
import BlockDefinitions from './stdlib';

const standards = [
  'Start',
  'Stop',
  'Loop'
]

const Palette = (props) => {
  const { className, dispatch, ...rest } = props;

  return (
    <div className={className}>
      {standards.map(cls => {
        const Class = BlockDefinitions[cls];
        const instance = new Class();

        return (
          <div
            className="d-block mb-1 w-100"
            onClick={() => dispatch({
              type: 'selectBlock',
              blockClass: cls,
            })}
          >
          { instance.renderToolbar({}) }
          </div>
        );
      })}
    </div>
  );
};

export default connect((dispatch) => ({ dispatch }))(Palette);
