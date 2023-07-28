import fetch from "node-fetch";

const jsonTypicode = "https://jsonplaceholder.typicode.com/todos/1";

// const fetchData = (apiEndPoint) => {
//   fetch(apiEndPoint)
//     .then((response) => response.json())
//     .then((json) => console.log(json))
//     .catch((error) => console.log(error));
// };

// fetchData(jsonTypicode);

//Refactored using async/await
const fetchData = async (apiEndPoint) => {
  try {
    const response = await fetch(apiEndPoint);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
fetchData(jsonTypicode);
