import Grid from "./components/Grid.js";

//data fetchers and sending to the grid;
async function fetchData() {
  //http://localhost:8080/data?rows=45&cols=20
  const response = await fetch("http://localhost:8080/testdata")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let myGrid = new Grid(data.data, 26, 7);
      myGrid.Render();
    })
    .catch((error) => console.log(error));
}
fetchData();

// const data = [
//   {
//       id: 1,
//       title: "Book One",
//       author: "Author One",
//       genre: "Fiction",
//       year_published: 2001,
//     },
//     {
//       id: 2,
//       title: "Book Two",
//       author: "Author Two",
//       genre: "Non-Fiction",
//       year_published: 2002,
//     },
//     {
//       id: 3,
//       title: "Book Three",
//       author: "Author Three",
//       genre: "Science Fiction",
//       year_published: 2003,
//     },
//     {
//       id: 4,
//       title: "Book Four",
//       author: "Author Four",
//       genre: "Biography",
//       year_published: 2004,
//     },
//     {
//       id: 5,
//       title: "Book Five",
//       author: "Author Five",
//       genre: "Mystery",
//       year_published: 2005,
//     },
  
//   ];

// let mygridcustom = new Grid(data, 7, 8);
// mygridcustom.Render();
