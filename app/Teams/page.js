import '../materialize.css'
import SideNav from '../sideNav'
import TeamListUI from './TeamListUI'
import {GetTeamData} from '../actions/getdata'


export default async function page(){

    const Teamdata = await GetTeamData()

    return(
        <>
        <div className='row'>
            <div className='col s3'>
                <SideNav/>
            </div>
            <div className='col s9'>
                <TeamListUI teamdata = {Teamdata}/>
                </div>
                </div>

        </>
    )
}
