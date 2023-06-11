import '../materialize.css';
import { GetTeamData } from '../actions/getdata';
import SideNav from '../sideNav';
import TopNav from '../topnav';
import TeamList from '../Team_list/TeamList';

export default async function page() {
  const teamdata = await GetTeamData();

  return (
    <>
      <TopNav />
      <div className='row'>
        <div className='col s2 offset'>
          <SideNav />
        </div>
        <div className='col s9'>
          <TeamList teamdata={teamdata} />
        </div>
      </div>
    </>
  );
}
