'use client'

import { useEffect, useState } from "react"
import TeamSelect from "./TeamSelect"
import MemberManage from "./MemberManage"

export default function TeamManage(props){

    const teamdata = props.teamdata
    const memberdata = props.memberdata
    let changevalue = null

    const [rightdiv, setRightdiv] = useState('null')


    return(
        <>
            <h3 className="center-align">팀 관리</h3>
            <div className="divider"></div>
            <div className="row container">
                <div className="col s3">
                    <TeamSelect teamdata={teamdata} setRightdiv={setRightdiv}/>
                </div>
                <div className="col s7">
                    <MemberManage teamid={rightdiv} memberdata={memberdata}/>
                </div>
            </div>
            
        </>
    )
}