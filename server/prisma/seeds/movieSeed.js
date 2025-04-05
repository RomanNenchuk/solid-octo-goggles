import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const movies = [
  {
    cover:
      "https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@._V1_SX300.jpg",
    name: "The Shawshank Redemption",
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    genre: "Drama",
  },
  {
    cover:
      "https://m.media-amazon.com/images/M/MV5BNDg5YjliNTMtMDUxYS00NWY5LTg1YjgtMWJkYmIxMTIxMWU3XkEyXkFqcGc@._V1_SX300.jpg",
    name: "Shawshank: The Redeeming Feature",
    description:
      "A documentary on the making and legacy of The Shawshank Redemption.",
    genre: "Documentary",
  },
  {
    cover:
      "https://m.media-amazon.com/images/M/MV5BNzIxMDQ2YTctNDY4MC00ZTRhLTk4ODQtMTVlOWY4NTdiYmMwXkEyXkFqcGc@._V1_SX300.jpg",
    name: "The Lord of the Rings: The Fellowship of the Ring",
    description:
      "A young hobbit, Frodo, embarks on a perilous journey to destroy a powerful ring.",
    genre: "Fantasy, Adventure",
  },
  {
    cover:
      "https://m.media-amazon.com/images/M/MV5BMTZkMjBjNWMtZGI5OC00MGU0LTk4ZTItODg2NWM3NTVmNWQ4XkEyXkFqcGc@._V1_SX300.jpg",
    name: "The Lord of the Rings: The Return of the King",
    description:
      "The final battle for Middle-earth begins as Frodo reaches Mount Doom.",
    genre: "Fantasy, Adventure",
  },
  {
    cover:
      "https://m.media-amazon.com/images/M/MV5BMGQxMDdiOWUtYjc1Ni00YzM1LWE2NjMtZTg3Y2JkMjEzMTJjXkEyXkFqcGc@._V1_SX300.jpg",
    name: "The Lord of the Rings: The Two Towers",
    description:
      "The fractured Fellowship prepares for battle while Frodo and Sam approach Mordor.",
    genre: "Fantasy, Adventure",
  },
  {
    cover:
      "https://m.media-amazon.com/images/M/MV5BNmVmZGQ2ZTctYzE4NC00YzkxLThhNjYtNGIyZjJmZGEwMjUzXkEyXkFqcGc@._V1_SX300.jpg",
    name: "The Lord of the Rings: The Rings of Power",
    description:
      "Epic drama set in the Second Age of Middle-earth, exploring the rise of Sauron.",
    genre: "Fantasy, TV Series",
  },
  {
    cover:
      "https://m.media-amazon.com/images/M/MV5BZmM3ZjE0NzctNjBiOC00MDZmLTgzMTUtNGVlOWFlOTNiZDJiXkEyXkFqcGc@._V1_SX300.jpg",
    name: "Back to the Future",
    description:
      "A teenager is accidentally sent 30 years into the past in a time-traveling DeLorean.",
    genre: "Sci-Fi, Adventure",
  },
  {
    cover:
      "https://m.media-amazon.com/images/M/MV5BMTNlOTRmOTEtMTAyMi00NjFiLTk3NDMtNWI0YzA3ZTZlYjZiXkEyXkFqcGc@._V1_SX300.jpg",
    name: "Back to the Future Part II",
    description:
      "Marty and Doc travel to the future and must fix the present to save the past.",
    genre: "Sci-Fi, Adventure",
  },
  {
    cover:
      "https://m.media-amazon.com/images/M/MV5BNTNkNzJmY2MtOGNjYi00NDJmLWIyZTQtNmFmMGQ5M2VlOTI0XkEyXkFqcGc@._V1_SX300.jpg",
    name: "Back to the Future Part III",
    description: "Marty travels to the Old West to rescue Doc Brown.",
    genre: "Sci-Fi, Adventure",
  },
  {
    cover:
      "https://m.media-amazon.com/images/M/MV5BNDhlMzEyNzItMTA5Mi00YWRhLThlNTktYTQyMTA0MDIyNDEyXkEyXkFqcGc@._V1_SX300.jpg",
    name: "Pirates of the Caribbean: The Curse of the Black Pearl",
    description:
      "A swashbuckling adventure following Captain Jack Sparrow's pursuit of cursed treasure.",
    genre: "Adventure, Fantasy",
  },
  {
    cover:
      "https://m.media-amazon.com/images/M/MV5BMTcwODc1MTMxM15BMl5BanBnXkFtZTYwMDg1NzY3._V1_SX300.jpg",
    name: "Pirates of the Caribbean: Dead Man's Chest",
    description:
      "Jack Sparrow must recover Davy Jones' heart to escape a blood debt.",
    genre: "Adventure, Fantasy",
  },
  {
    cover:
      "https://m.media-amazon.com/images/M/MV5BMjIyNjkxNzEyMl5BMl5BanBnXkFtZTYwMjc3MDE3._V1_SX300.jpg",
    name: "Pirates of the Caribbean: At World's End",
    description:
      "Captain Jack Sparrow and his allies battle the East India Trading Company.",
    genre: "Adventure, Fantasy",
  },
  {
    cover:
      "https://m.media-amazon.com/images/M/MV5BMjE5MjkwODI3Nl5BMl5BanBnXkFtZTcwNjcwMDk4NA@@._V1_SX300.jpg",
    name: "Pirates of the Caribbean: On Stranger Tides",
    description:
      "Jack Sparrow joins forces with Angelica to seek the Fountain of Youth.",
    genre: "Adventure, Fantasy",
  },
];

async function main() {
  for (const movie of movies) {
    await prisma.movie.create({
      data: movie,
    });
  }
  console.log("Movies added successfully");
}

main()
  .catch(e => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
