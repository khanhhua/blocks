import React from 'react';

export default class BaseBlock {
  renderToolbar(ctx) {
    return <button className="btn btn-secondary btn-block">{this.constructor.name}</button>
  }

  renderCanvas(ctx) {

  }

  step(ctx) {
    return;
  }
}
