-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Member" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "uid" TEXT NOT NULL,
    "tid" INTEGER NOT NULL,
    "check" BOOLEAN NOT NULL DEFAULT false,
    "current" BOOLEAN NOT NULL DEFAULT true,
    "createtime" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Member_uid_fkey" FOREIGN KEY ("uid") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Member_tid_fkey" FOREIGN KEY ("tid") REFERENCES "Team" ("team_id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Member" ("createtime", "current", "id", "tid", "uid") SELECT "createtime", "current", "id", "tid", "uid" FROM "Member";
DROP TABLE "Member";
ALTER TABLE "new_Member" RENAME TO "Member";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
