import '../materialize.css'
import { GetTeamData, GetMemberData, GetUserData } from '../actions/getdata'
import SideNav from '../sideNav'
import TopNav from '../topnav';
import TeamList from './TeamList';

export default async function page() {

    const teamdata = await GetTeamData()
    const memberdata = await GetMemberData()
    const userdata = await GetUserData()


    return (
        <>
            <TopNav/>
            <div className='row'>
                <div className='col s2 offset'>
                    <SideNav/>
                </div>
                <div className='col s9'>
                    <TeamList teamdata = {teamdata} userdata = {userdata} memberdata = {memberdata} />
                </div>
            </div>
        </>
    );
}
