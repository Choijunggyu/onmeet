import prisma from '../libs/prismadb'

export async function InsertUserData(id, password, name, email, major, school, grade){
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

export async function InsertTeamData(name, leaderId, team_type,team_goal,member_check){
    try{

        let setboolean = false

        if(member_check === 'true'){
            setboolean = true
        }

        await prisma.Team.create({
            data: {
                name,
                leaderId,
                team_type,
                team_goal,
                member_check : setboolean
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