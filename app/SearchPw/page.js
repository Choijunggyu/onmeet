import '../materialize.css'
import getdata from '../actions/getdata';
import SearchPw from './SearchPw';

export default async function page(){

    const data = await getdata()

    return (
        <div className='container'>
            <SearchPw data = {data}/>
        </div> 
    );
};