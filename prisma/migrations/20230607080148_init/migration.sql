-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Team" (
    "team_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "leaderId" TEXT NOT NULL,
    "team_type" TEXT NOT NULL,
    "team_goal" TEXT NOT NULL,
    "member_check" BOOLEAN NOT NULL DEFAULT false,
    "createtime" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Team_leaderId_fkey" FOREIGN KEY ("leaderId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Team" ("createtime", "leaderId", "member_check", "name", "team_goal", "team_id", "team_type") SELECT "createtime", "leaderId", "member_check", "name", "team_goal", "team_id", "team_type" FROM "Team";
DROP TABLE "Team";
ALTER TABLE "new_Team" RENAME TO "Team";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
