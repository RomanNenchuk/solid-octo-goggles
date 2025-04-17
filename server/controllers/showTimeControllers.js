import { prisma } from "../index.js";

export async function getShowTimeInfo(req, res) {
  const id = req.params.id;
  try {
    const showTime = await prisma.showTime.findUnique({
      where: { id },
      select: {
        hall: {
          select: {
            id: true,
            name: true,
            totalSeats: true,
            seats: true,
          },
        },
        bookedSeats: {
          select: {
            seat: {
              select: {
                id: true,
                row: true,
                column: true,
              },
            },
          },
        },
      },
    });

    if (!showTime) {
      return res.status(404).json({ message: "ShowTime not found" });
    }

    const bookedSeatIds = new Set(
      showTime.bookedSeats.map(bookedSeat => bookedSeat.seat.id)
    );

    const processedResponse = {
      name: showTime.hall.name,
      totalSeats: showTime.hall.totalSeats,
      seats: showTime.hall.seats.map(seat => ({
        id: seat.id,
        row: seat.row,
        column: seat.column,
        isOccupied: bookedSeatIds.has(seat.id),
      })),
    };

    res.send(processedResponse);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function makeBooking(req, res) {
  const showTimeId = req.params.id;
  const { userName, email, phone, selectedSeats } = req.body;
  try {
    let user = await prisma.user.findUnique({
      where: { email },
      select: { id: true },
    });
    if (!user)
      user = await prisma.user.create({
        data: {
          name: userName,
          email: email,
        },
        select: {
          id: true,
        },
      });

    const { id: bookingId } = await prisma.booking.create({
      data: {
        userId: user.id,
        showTimeId,
      },
      select: { id: true },
    });

    const bookedSeatsData = selectedSeats.map(seatId => ({
      seatId,
      bookingId,
      showTimeId,
    }));

    await prisma.bookedSeat.createMany({
      data: bookedSeatsData,
      skipDuplicates: true,
    });
    res.status(201).json({ message: "Booked successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}
