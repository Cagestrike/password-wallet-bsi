-- CreateTable
CREATE TABLE "users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "login" TEXT,
    "password_hash" TEXT,
    "salt" TEXT,
    "isPasswordKeptAsHash" BOOLEAN
);

-- CreateTable
CREATE TABLE "Password" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "password" TEXT,
    "id_user" INTEGER NOT NULL,
    "web_address" TEXT,
    "description" TEXT,
    "login" TEXT,
    CONSTRAINT "Password_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "users_login_key" ON "users"("login");
