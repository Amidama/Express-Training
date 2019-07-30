  const books = [
    {
      "id": "1",
      "name": "Game of thrones"
    },
    {
      "id": "2",
      "name": "Clash of kings"
    }
  ];

  const updateIndex = books.findIndex(book => book.id === '2')
  // const updateIndex = books.findIndex(book => console.log(book))
  console.log(updateIndex);
  // console.log(Object.assign(books[updateIndex], 'a'));
//   res.json(Object.assign(books[updateIndex], req.body))