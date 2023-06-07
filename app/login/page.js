import GetUserData from '../actions/getdata'
import '../materialize.css'
import '../login/Login.css'
import Login from './Login'
import TopNav from '../topnav'
import SearchNav from './SearchNav'

export default async function Page(){

    const data = await GetUserData()

    return(
        <>
        <TopNav/>
        <div className='container section'>
            <Login data={data}/>
            <SearchNav/>
        </div>
        </>
    )
}