import '../materialize.css'
import getdata from '../actions/getdata';
import SearchId from './SearchId';

export default async function page(){

    const data = await getdata()

    return (
        <div className='container'>
            <SearchId data = {data}/>
        </div> 
    );
};