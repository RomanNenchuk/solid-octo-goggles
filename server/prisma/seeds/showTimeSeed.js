import dotenv from "dotenv";
dotenv.config();
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Додай сеанси
  const showTime1 = await prisma.showTime.create({
    data: {
      movieId: "0b0a5702-47f2-421e-8aa9-add4a69b73b1",
      hallId: "f0882085-33ce-4eb2-b43a-98e1890f4baa",
      startTime: new Date(
        Date.now() + 1000 * 60 * 60 * 24 * 30 * 12 * 2 + 1000 * 60 * 60 * 8
      ), // через 2 роки
    },
  });

  const showTime2 = await prisma.showTime.create({
    data: {
      movieId: "550e8400-e29b-41d4-a716-446655440000",
      hallId: "f0882085-33ce-4eb2-b43a-98e1890f4baa",
      startTime: new Date(
        Date.now() + 1000 * 60 * 24 * 30 * 12 * 1 + 1000 * 60 * 60 * 7
      ), // через 1 рік
    },
  });
  const showTime3 = await prisma.showTime.create({
    data: {
      movieId: "0b0a5702-47f2-421e-8aa9-add4a69b73b1",
      hallId: "f0882085-33ce-4eb2-b43a-98e1890f4baa",
      startTime: new Date(
        Date.now() + 1000 * 60 * 60 * 24 * 30 + +1000 * 60 * 60 * 6
      ), // через місяць
    },
  });

  const showTime4 = await prisma.showTime.create({
    data: {
      movieId: "550e8400-e29b-41d4-a716-446655440000",
      hallId: "f0882085-33ce-4eb2-b43a-98e1890f4baa",
      startTime: new Date(
        Date.now() + 1000 * 60 * 24 * 30 * 12 * 5 + +1000 * 60 * 60 * 5
      ), // через 5 років
    },
  });
  const showTime5 = await prisma.showTime.create({
    data: {
      movieId: "0b0a5702-47f2-421e-8aa9-add4a69b73b1",
      hallId: "f0882085-33ce-4eb2-b43a-98e1890f4baa",
      startTime: new Date(
        Date.now() + 1000 * 60 * 60 * 24 * 30 * 12 * 2 + 1000 * 60 * 60 * 4
      ), // через 2 роки
    },
  });

  const showTime6 = await prisma.showTime.create({
    data: {
      movieId: "550e8400-e29b-41d4-a716-446655440000",
      hallId: "f0882085-33ce-4eb2-b43a-98e1890f4baa",
      startTime: new Date(
        Date.now() + 1000 * 60 * 24 * 30 * 12 * 5 + 1000 * 60 * 60 * 3
      ), // через 5 років
    },
  });
  const showTime7 = await prisma.showTime.create({
    data: {
      movieId: "0b0a5702-47f2-421e-8aa9-add4a69b73b1",
      hallId: "f0882085-33ce-4eb2-b43a-98e1890f4baa",
      startTime: new Date(
        Date.now() + 1000 * 60 * 60 * 24 * 30 * 12 * 2 + 1000 * 60 * 60 * 2
      ), // через 2 роки
    },
  });

  const showTime8 = await prisma.showTime.create({
    data: {
      movieId: "550e8400-e29b-41d4-a716-446655440000",
      hallId: "f0882085-33ce-4eb2-b43a-98e1890f4baa",
      startTime: new Date(
        Date.now() + 1000 * 60 * 60 * 24 * 30 * 12 * 5 + 1000 * 60 * 60 * 1
      ), // через 5 років
    },
  });

  // Додай користувача
  const user1 = await prisma.user.create({
    data: {
      name: "Vitaly",
      email: "vitaly@example.com",
    },
  });
  const user2 = await prisma.user.create({
    data: {
      name: "Olya",
      email: "olya@example.com",
    },
  });

  // Бронювання місць
  const allSeats = await prisma.seat.findMany({
    where: { hallId: "f0882085-33ce-4eb2-b43a-98e1890f4baa" },
    take: 3,
  });

  const booking = await prisma.booking.create({
    data: {
      userId: user1.id,
      showTimeId: showTime1.id,
      bookedSeats: {
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
