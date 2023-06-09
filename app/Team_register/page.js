import '../materialize.css'
import SideNav from '../sideNav'
import TopNav from '../topnav'
import TeamRegister from './TeamRegister'


export default function page(){
    return(
        <>
        <TopNav/>
        <div className='row'>
            <div className='col s2 offset'>
                <SideNav/>
            </div>
            <div className='col s10'>
                <TeamRegister/>
            </div>
        </div>
        </>
    )
}