'use client'
import { useEffect, useState } from "react"
import TeamSelect from "./TeamSelectAll"


export default function TeamListUI(props){

    const teamdata = props.teamdata

    const [rightdiv, setRightdiv] = useState('null')

    useEffect(()=>{
        console.log(rightdiv)
    },[rightdiv])

    return(
        <>
            
           <TeamSelect teamdata={teamdata} setRightdiv={setRightdiv}/>
          
        </>
    )
}
