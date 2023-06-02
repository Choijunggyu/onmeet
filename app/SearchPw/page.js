import '../materialize.css'
import getdata from '../actions/getdata';
import SearchPw from './SearchPw';
import TopNav from '../topnav';

export default async function page(){

    const data = await getdata()

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