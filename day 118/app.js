// // 5. List of Items

// import React, { useState } from 'react';

// function ListOfItems() {
//   const [items, setItems] = useState([]);
//   const [inputValue, setInputValue] = useState('');

//   const addItem = () => {
//     if (inputValue) {
//       setItems([...items, inputValue]);
//       setInputValue('');
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//         placeholder="Enter item"
//       />
//       <button onClick={addItem}>Add Item</button>
//       <ul>
//         {items.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ListOfItems;

// // 6. Form Submission

// import React, { useState } from 'react';

// function FormSubmission() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmitted(true);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           placeholder="Name"
//         />
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Email"
//         />
//         <button type="submit">Submit</button>
//       </form>
//       {submitted && (
//         <p>
//           Name: {name}, Email: {email}
//         </p>
//       )}
//     </div>
//   );
// }

// export default FormSubmission;

// // 7. Like Button

// import React, { useState } from 'react';

// function LikeButton() {
//   const [liked, setLiked] = useState(false);

//   return (
//     <div>
//       <button onClick={() => setLiked(!liked)}>
//         {liked ? 'Unlike' : 'Like'}
//       </button>
//     </div>
//   );
// }

// export default LikeButton;
// // 8. Show Password

// import React, { useState } from 'react';

// function ShowPassword() {
//   const [showPassword, setShowPassword] = useState(false);

//   return (
//     <div>
//       <input
//         type={showPassword ? 'text' : 'password'}
//         placeholder="Enter Password"
//       />
//       <label>
//         <input
//           type="checkbox"
//           checked={showPassword}
//           onChange={() => setShowPassword(!showPassword)}
//         />
//         Show Password
//       </label>
//     </div>
//   );
// }

// export default ShowPassword;

// 9. Disable/Enable Button

import React, { useState } from 'react';

function DisableEnableButton() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
        Enable Button
      </label>
      <button disabled={!isChecked}>Click Me</button>
    </div>
  );
}

export default DisableEnableButton;
