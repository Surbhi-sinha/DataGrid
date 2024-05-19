// import the Grid component
import Grid from "./components/Grid.js";

//DEFINE YOUR DATA
const data = [
  {
      id: 1,
      title: "Book One",
      author: "Author One",
      genre: "Fiction",
      year_published: 2001,
    },
    {
      id: 2,
      title: "Book Two",
      author: "Author Two",
      genre: "Non-Fiction",
      year_published: 2002,
    },
    {
      id: 3,
      title: "Book Three",
      author: "Author Three",
      genre: "Science Fiction",
      year_published: 2003,
    },
    {
      id: 4,
      title: "Book Four",
      author: "Author Four",
      genre: "Biography",
      year_published: 2004,
    },
    {
      id: 5,
      title: "Book Five",
      author: "Author Five",
      genre: "Mystery",
      year_published: 2005,
    },
  
  ];

//INITILISE THE GRID COMPONENT AND DEFINE ROWS AND COLUMN.
let mygridcustom = new Grid(data, 7, 8);
//CALL THE RENDER() method
mygridcustom.Render();
