import '../materialize.css'
import getdata from '../actions/getdata';
import ContectFrom from './ContectForm';

export default async function page(){

    const data = await getdata()

    return (
        <div className='container'>
            <ContectFrom data = {data}/>
        </div> 
    );
};