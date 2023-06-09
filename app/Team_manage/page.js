import '../materialize.css'
import SideNav from '../sideNav'
import TopNav from '../topnav'
import TeamManage from './TeamManage'
import {GetMemberData, GetTeamData, GetUserData} from '../actions/getdata'


export default async function page(){

    const Teamdata = await GetTeamData()
    const Memberdata = await GetMemberData()
    const Userdata = await GetUserData()

    return(
        <>
        <TopNav/>
        <div className='row'>
            <div className='col s2'>
                <SideNav/>
            </div>
            <div className='col s9'>
                <TeamManage teamdata = {Teamdata} memberdata = {Memberdata} userdata={Userdata}/>
            </div>
        </div>
        </>
    )
}