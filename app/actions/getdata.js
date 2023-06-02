import prisma from '../libs/prismadb'


//userDB의 값을 가져올때
export default async function GetUserData(){
    try{
        const users = await prisma.User.findMany()
        return users
    } catch(error){
        console.log(error)
    }
}

//TeamDB의 값을 가져올때
export async function GetTeamData(){
    try{
        const teams = await prisma.Team.findMany()
        return teams
    } catch(error){
        console.log(error)
    }
}