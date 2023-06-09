
import MemberAgreefunc from "../actions/update"


export default function AgreeButton(props){

    const mid = props.mid

    const changestate = () =>{
        MemberAgreefunc(mid)
    }

    return(
        <>
        <button className="waves-effect waves-teal btn-flat mexavas-text-blue" onClick={e=>changestate()}>허가</button>
        </>
    )
}