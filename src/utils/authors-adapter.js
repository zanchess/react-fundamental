const authorsAdapter = (course, authors) => course.authors
  .map((authorId) => authors.find((author) => authorId === author.id))
  .map((author) => author.name);

export default authorsAdapter;
