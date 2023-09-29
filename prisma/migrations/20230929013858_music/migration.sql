-- CreateTable
CREATE TABLE "music" (
    "id" UUID NOT NULL,
    "album" VARCHAR(255) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "author" VARCHAR(255) NOT NULL,

    CONSTRAINT "music_pkey" PRIMARY KEY ("id")
);
