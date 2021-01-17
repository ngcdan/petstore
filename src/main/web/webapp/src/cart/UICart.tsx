import React from 'react';

interface UICartProps {
  test?: string;
}

export class UICart extends React.Component<UICartProps> {

  render() {
    return (<h1>Cart {this.props.test}</h1>);
  }
}