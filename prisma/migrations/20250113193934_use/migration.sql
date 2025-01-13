-- CreateTable
CREATE TABLE "_StudentToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_StudentToUser_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_StudentToUser_B_index" ON "_StudentToUser"("B");

-- AddForeignKey
ALTER TABLE "_StudentToUser" ADD CONSTRAINT "_StudentToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Student"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_StudentToUser" ADD CONSTRAINT "_StudentToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;