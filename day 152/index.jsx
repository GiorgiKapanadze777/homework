//1
// import React, { memo } from 'react';

// const Child = memo(({ name, age }) => {
//   console.log('Child component re-rendered');
//   return (
//     <div>
//       <p>Name: {name}</p>
//       <p>Age: {age}</p>
//     </div>
//   );
// });

// const Parent = () => {
//   const [count, setCount] = React.useState(0);

//   return (
//     <div>
//       <Child name="John" age={25} />
//       <button onClick={() => setCount(count + 1)}>Increment: {count}</button>
//     </div>
//   );
// };

// export default Parent;








//2
// import React, { memo } from 'react';

// const ListItem = memo(({ item }) => {
//   console.log(`Rendering item: ${item}`);
//   return <li>{item}</li>;
// });

// const List = ({ items }) => {
//   return (
//     <ul>
//       {items.map((item, index) => (
//         <ListItem key={index} item={item} />
//       ))}
//     </ul>
//   );
// };

// export default List;









//3
import React, { memo } from 'react';

const MemoizedButton = memo(({ label, onClick }) => {
  console.log('Button re-rendered');
  return <button onClick={onClick}>{label}</button>;
});

export default MemoizedButton;
