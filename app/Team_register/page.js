import '../materialize.css'
import TopNav from '../topnav'
import TeamRegister from './TeamRegister'


export default function page(){
    return(
        <>
        <TopNav/>
        <div className='row'>
            <div className='col s2'>
                sidenav영역
            </div>
            <div className='col s9'>
                <TeamRegister/>
            </div>
        </div>
        </>
    )
}