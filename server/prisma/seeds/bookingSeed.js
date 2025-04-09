import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";
dotenv.config();
const prisma = new PrismaClient();

async function createBooking() {
  const userId = "f3f828a1-fa11-49d6-8b7e-38bc018806cd";
  const showTimeId = "4ce4de0f-98ae-4cd1-92f4-2d343499fe9f";
  const seatIds = [
    "0522105d-8d36-4c36-aa50-18d45d393c2f",
    "0f87bd3c-9f09-47a4-8852-dfce64f0c2a0",
  ]; // список ID місць, які хочемо забронювати

  const booking = await prisma.booking.create({
    data: {
      userId,
      showTimeId,
      bookedSeats: {
        create: seatIds.map(seatId => ({
          seat: { connect: { id: seatId } },
          showTime: { connect: { id: showTimeId } },
        })),
      },
    },
    include: {
      bookedSeats: true,
    },
  });

  console.log("Booking created:", booking);
}

createBooking().catch(console.error);
