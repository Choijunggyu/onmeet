import '../materialize.css'
import { GetUserData, GetMemberData, GetTeamData } from '../actions/getdata'
import TopNav from '../topnav';
import MyPage from './MyPage';

export default async function page() {

    const data = await GetUserData()
    const memberdata = await GetMemberData()
    const teamdata = await GetTeamData()

    return (
        <div>
            <TopNav/>
            <MyPage data = {data} memberdata = {memberdata} teamdata = {teamdata} />
        </div>
    )
}
