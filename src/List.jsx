import React, { compnent, useState } from "react";

const List = ({ title }) => {
  return (
    <ul>
      <li>{title}</li>
    </ul>
  );
};

// // same code
// // get by props
// export default List;

// const List = (props) => {
//   return <ul>
//     <li>
//       {props.title}
//     </li>
//   </ul>
// };

export default List;
