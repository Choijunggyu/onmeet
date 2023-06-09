import '../materialize.css'
import {GetUserData} from '../actions/getdata'
import TopNav from '../topnav';
import MyPage from './MyPage';


export default async function page() {

    const data = await GetUserData()

    return (
        <div>
            <TopNav/>
            <MyPage data = {data} />
        </div>
    )
}
