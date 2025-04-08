/*
  Warnings:

  - A unique constraint covering the columns `[seatId,showTimeId]` on the table `BookedSeat` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `showTimeId` to the `BookedSeat` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BookedSeat" ADD COLUMN     "showTimeId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "BookedSeat_seatId_showTimeId_key" ON "BookedSeat"("seatId", "showTimeId");

-- AddForeignKey
ALTER TABLE "BookedSeat" ADD CONSTRAINT "BookedSeat_showTimeId_fkey" FOREIGN KEY ("showTimeId") REFERENCES "ShowTime"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
