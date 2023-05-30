import prisma from '../libs/prismadb'

export default async function insertdata(id, password,name, email){
    try{
        const create = await prisma.user.create({
            data: {
                id: id,
                password: password,
                name: name,
                email: email
            }
        })
    } catch(error){
        console.log(error)
    }
}