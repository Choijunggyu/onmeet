import prisma from '../libs/prismadb'

export default async function GetUserData(){
    try{
        const users = await prisma.User.findMany()
        return users
    } catch(error){
        console.log(error)
    }
}