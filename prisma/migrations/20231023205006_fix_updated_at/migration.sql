-- AlterTable
ALTER TABLE "playlist" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "_musicToplaylist" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateTable
CREATE TABLE "_playlistTouser" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_musicToplaylist_AB_unique" ON "_musicToplaylist"("A", "B");

-- CreateIndex
CREATE INDEX "_musicToplaylist_B_index" ON "_musicToplaylist"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_playlistTouser_AB_unique" ON "_playlistTouser"("A", "B");

-- CreateIndex
CREATE INDEX "_playlistTouser_B_index" ON "_playlistTouser"("B");

-- AddForeignKey
ALTER TABLE "_musicToplaylist" ADD CONSTRAINT "_musicToplaylist_A_fkey" FOREIGN KEY ("A") REFERENCES "music"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_musicToplaylist" ADD CONSTRAINT "_musicToplaylist_B_fkey" FOREIGN KEY ("B") REFERENCES "playlist"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_playlistTouser" ADD CONSTRAINT "_playlistTouser_A_fkey" FOREIGN KEY ("A") REFERENCES "playlist"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_playlistTouser" ADD CONSTRAINT "_playlistTouser_B_fkey" FOREIGN KEY ("B") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
