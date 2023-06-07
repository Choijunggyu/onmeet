'use server'

import {InsertUserData, InsertTeamData, InsertMemberData} from "./insertdata"

export async function InsertUser(data){
    InsertUserData(data.id, data.pw, data.name, data.email, data.major, data.school, data.grade)
}

export async function InsertTeam(data){
    InsertTeamData(data.name, data.leaderId, data.type, data.goal)
}

export async function InsertMember(data){
    InsertMemberData(data.uid, data.tid)
}