import React from 'react';

function ChildrenBox(props) {
  return <div className={props.class + ' ChildrenBox'}> {props.children} </div>;
}

export default ChildrenBox;
