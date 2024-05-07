<h1>Basic Introduction :</h1>
- Modular component based architechture.
- Grid Component simply renders the data into the grid.
- features of the Grid (editable cells, sorting, represents the data into the tabular format).
- Here the data is provided by the backend server although user can defined there own JSON dataset and create there desirable grid;
  
<h1>Installation</h1>

Redirect to the Backend folder and open the terminal here.

for installing the node libraries run this command.
```
npm install
```

<h1>Usage</h1>

**Initialise a grid**
```javascript
// initialising a JSON dataset
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

//initialising the grid
let mygridcustom = new Grid(data, 7, 8);
// rendering the grid
mygridcustom.Render();

```