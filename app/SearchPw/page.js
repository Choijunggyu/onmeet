import '../materialize.css'
import getdata from '../actions/getdata';
import SearchPw from './SearchPw';
import SideNav from '../sidenav';

export default async function page(){

    const data = await getdata()

    return (
        <>
        <SideNav/>
        <h2 className='center-align mexavas-text-white'>비밀번호 찾기</h2> 
        <div className='container'>
            <SearchPw data = {data}/>
        </div>
        </>
    );
};