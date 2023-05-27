import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default async function Home(){
    const data = await prisma.User.findMany(); //prisma.테이블이름.찾아오기
    return(
        <div>
            <ul>
                {data.map((data) => (<li key={data.id}>{data.name}</li>))}
            </ul>
        </div>
    )
}