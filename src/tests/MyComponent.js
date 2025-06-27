import React from "react";

const MyComponent = () => {
  const [clicked, setClicked] = React.useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      {clicked && <p>Button clicked</p>}
    </div>
  );
};

export default MyComponent;
