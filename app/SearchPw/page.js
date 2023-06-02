import '../materialize.css'
import SearchPw from './SearchPw';
import TopNav from '../topnav';
import GetUserData from '../actions/getdata';

export default async function page(){

    const data = await GetUserData()

    return (
        <>
        <TopNav/>
        <h2 className='center-align mexavas-text-white'>비밀번호 찾기</h2> 
        <div className='container'>
            <SearchPw data = {data}/>
        </div>
        </>
    );
};