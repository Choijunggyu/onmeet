'use server'

import insertdata from "../actions/insertdata"

export async function Insert(data){
    insertdata(data.id, data.pw, data.name, data.email)
}