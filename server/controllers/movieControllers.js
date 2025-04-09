import { prisma } from "../index.js";

export async function getShowTimeInfo(req, res) {
  const id = req.params.id;
  console.log(id);
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
        col: seat.column,
        isOccupied: bookedSeatIds.has(seat.id),
      })),
    };

    res.send(processedResponse);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}
// export async function getShowTimeInfo(req, res) {
//   const id = req.params.id;
//   console.log(id);
//   try {
//     const response = await prisma.hall.findFirst({
//       select: {
//         name: true,
//         totalSeats: true,
//         showTimes: {
//           where: { id },
//           select: {
//             id: true,
//             bookedSeats: {
//               select: {
//                 seat: {
//                   select: { id: true, row: true, column: true },
//                 },
//               },
//             },
//           },
//         },
//       },
//     });

//     const processedResponse = {
//       name: response.name,
//       totalSeats: response.totalSeats,
//       bookedSeats: response.showTimes[0]?.bookedSeats?.map(
//         bookedSeat => bookedSeat.seat
//       ),
//     };
//     console.log(response);
//     console.log(processedResponse);

//     res.send(processedResponse);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// }

export async function getMovies(req, res) {
  const { query, page = 1, limit = 10 } = req.query;
  const pageNumber = parseInt(page);
  const itemsPerPage = parseInt(limit);

  const whereCondition = query
    ? {
        name: {
          contains: query,
          mode: "insensitive",
        },
      }
    : {};

  try {
    const response = await prisma.movie.findMany({
      select: {
        id: true,
        name: true,
        cover: true,
        showTimes: {
          select: {
            id: true,
            startTime: true,
            hall: { select: { id: true, name: true, totalSeats: true } },
          },
        },
      },
      where: whereCondition,
      skip: (pageNumber - 1) * itemsPerPage,
      take: itemsPerPage,
    });
    res.send(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}
