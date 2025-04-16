import { makeRequest } from "./makeRequest";
import { SeatType } from "../components/Hall/CinemaHall";

type BookingOptions = {
  id: string;
  userName: string;
  email: string;
  phone: string;
  selectedSeats: SeatType["id"][];
};

export async function makeBooking({
  id,
  ...options
}: BookingOptions): Promise<{ status: number }> {
  const response = await makeRequest(`/showTimes/${id}/bookings`, {
    method: "POST",
    data: options,
  });
  return response;
}
