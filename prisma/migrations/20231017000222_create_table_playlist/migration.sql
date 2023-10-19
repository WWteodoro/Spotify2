-- CreateTable
CREATE TABLE "music" (
    "id" UUID NOT NULL,
    "album" VARCHAR(255) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "music_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "playlist" (
    "id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "author" VARCHAR(255) NOT NULL,
    "description" VARCHAR(1000) NOT NULL,

    CONSTRAINT "playlist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_musicTouser" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_musicTouser_AB_unique" ON "_musicTouser"("A", "B");

-- CreateIndex
CREATE INDEX "_musicTouser_B_index" ON "_musicTouser"("B");

-- AddForeignKey
ALTER TABLE "_musicTouser" ADD CONSTRAINT "_musicTouser_A_fkey" FOREIGN KEY ("A") REFERENCES "music"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_musicTouser" ADD CONSTRAINT "_musicTouser_B_fkey" FOREIGN KEY ("B") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
