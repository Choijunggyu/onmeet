import '../materialize.css'
import getdata from '../actions/getdata';
import SearchId from './SearchId';
import SideNav from '../sidenav';
import TopNav from '../topnav';

export default async function page(){

    const data = await getdata()

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