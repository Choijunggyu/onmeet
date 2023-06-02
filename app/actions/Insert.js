'use server'

import InsertUserData from "./insertdata"

export async function InsertUser(data){
    InsertUserData(data.id, data.pw, data.name, data.email, data.major, data.school, data.grade)
}