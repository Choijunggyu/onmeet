import prisma from '../libs/prismadb'

export default async function insertdata(id, password,name, email, major, school, grade){
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