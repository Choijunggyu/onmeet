import prisma from '../libs/prismadb'

export default async function InsertUserData(id, password,name, email, major, school, grade){
    try{
        await prisma.user.create({
            data: {
                id: id,
                password: password,
                name: name,
                email: email,
                major: major,
                school: school,
                grade: grade
            }
        })
    } catch(error){
        console.log(error)
    }
}

export async function InsertTeamData(name, leaderId, team_type,team_goal){
    try{
        await prisma.Team.create({
            data: {
                name,
                leaderId,
                team_type,
                team_goal
            }
        })
    } catch(error){
        console.log(error)
    }
}

export async function InsertMemberData(uid, tid){
    try{
        await prisma.Member.create({
            data: {
                uid,
                tid
            }
        })
    } catch(error){
        console.log(error)
    }
}