-- CreateTable
CREATE TABLE "Network" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "icon" TEXT NOT NULL,

    CONSTRAINT "Network_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SoulCategory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "SoulCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Soul" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "eligibilityDescription" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "project" TEXT NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "networkId" INTEGER NOT NULL,

    CONSTRAINT "Soul_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Network_name_key" ON "Network"("name");

-- CreateIndex
CREATE UNIQUE INDEX "SoulCategory_name_key" ON "SoulCategory"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Soul_name_key" ON "Soul"("name");

-- AddForeignKey
ALTER TABLE "Soul" ADD CONSTRAINT "Soul_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "SoulCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Soul" ADD CONSTRAINT "Soul_networkId_fkey" FOREIGN KEY ("networkId") REFERENCES "Network"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
