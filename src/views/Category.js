import React from 'react';

function Category(props) {
  return (
    <div>
      Category {props.category}
      <div>{props.children}</div>
    </div>
  );
}

export default Category;
