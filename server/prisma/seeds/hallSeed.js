import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  //   for (const movie of movies) {
  //     await prisma.movie.create({
  //       data: movie,
  //     });
  //   }

  console.log(await prisma.hall.description);
}

main()
  .catch(e => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
