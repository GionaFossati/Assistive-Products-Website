import React from "react";
/* We simply can use an array and loop and print each user */
const WorksPage = () => {
  return (
    <div>
      <ul>
        {["Alex", "John", "Jaz", "fedrik", "missali","works"].map((user, idx) => {
          return <li key={idx}>{user}</li>;
        })}
      </ul>
    </div>
  );
};

export default WorksPage;