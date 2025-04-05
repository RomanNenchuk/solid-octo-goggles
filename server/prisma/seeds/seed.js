import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // Додай кілька залів
  const hall1 = await prisma.hall.create({
    data: {
      name: "Big hall",
      totalSeats: 100,
    },
  });

  const hall2 = await prisma.hall.create({
    data: {
      name: "Small hall",
      totalSeats: 50,
    },
  });

  // Додай місця у залах
  const generateSeats = async (hallId, rows, cols) => {
    const seats = [];
    for (let row = 1; row <= rows; row++) {
      for (let col = 1; col <= cols; col++) {
        seats.push({ row, column: col, hallId });
      }
    }
    await prisma.seat.createMany({ data: seats });
  };

  await generateSeats(hall1.id, 10, 10); // 100 місць
  await generateSeats(hall2.id, 5, 10); // 50 місць

  // // Додай фільм, якщо потрібно
  // const movie = await prisma.movie.create({
  //   data: {
  //     name: "Інтерстеллар",
  //     genre: "Наукова фантастика",
  //     description: "Екіпаж космічного корабля вирушає крізь червоточину...",
  //     cover: "https://example.com/interstellar.jpg",
  //   },
  // });

  // Додай сеанси
  const showTime1 = await prisma.showTime.create({
    data: {
      movieId: "0b0a5702-47f2-421e-8aa9-add4a69b73b1",
      hallId: hall1.id,
      startTime: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30 * 12 * 2), // через 2 роки
    },
  });

  const showTime2 = await prisma.showTime.create({
    data: {
      movieId: "550e8400-e29b-41d4-a716-446655440000",
      hallId: hall2.id,
      startTime: new Date(Date.now() + 1000 * 60 * 24 * 30 * 12 * 5), // через 5 років
    },
  });

  // Додай користувача
  const user = await prisma.user.create({
    data: {
      name: "Oleh",
      email: "oleh@example.com",
    },
  });

  // Бронювання місць
  const allSeats = await prisma.seat.findMany({
    where: { hallId: hall1.id },
    take: 3,
  });

  const booking = await prisma.booking.create({
    data: {
      userId: user.id,
      showTimeId: showTime1.id,
      BookedSeat: {
        create: allSeats.map(seat => ({
          seatId: seat.id,
        })),
      },
    },
  });

  console.log("✔️ Базу заповнено!");
}

main()
  .catch(e => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
