'use server'

import insertdata from "./insertdata"

export async function Insert(data){
    insertdata(data.id, data.pw, data.name, data.email, data.major, data.school, data.grade)
}