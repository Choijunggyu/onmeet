import GetUserData from '../actions/getdata'
import '../materialize.css'
import '../login/Login.css'
import Login from './Login'

export default async function Page(){

    const data = await GetUserData()

    return(
        <Login data={data}/>
    )
}