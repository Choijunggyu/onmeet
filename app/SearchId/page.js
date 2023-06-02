import '../materialize.css'
import SearchId from './SearchId';
import TopNav from '../topnav';
import GetUserData from '../actions/getdata';

export default async function page(){

    const data = await GetUserData()

    return (
        <>
        <TopNav/>
        <h2 className='mexavas-text-white center-align'>아이디 찾기</h2> 
        <div className='container'>
            <SearchId data = {data}/>
        </div> 
        </>
    );
};