-- AlterTable
ALTER TABLE "Country" RENAME CONSTRAINT "Country_key" TO "Country_pkey";

-- AlterTable
ALTER TABLE "Course" RENAME CONSTRAINT "Course_key" TO "Course_pkey";

-- AlterTable
ALTER TABLE "User" RENAME CONSTRAINT "User_key" TO "User_pkey";

-- RenameForeignKey
ALTER TABLE "Course" RENAME CONSTRAINT "Course_countryName_key" TO "Course_countryName_fkey";

-- RenameForeignKey
ALTER TABLE "User" RENAME CONSTRAINT "User_countryId_key" TO "User_countryId_fkey";
