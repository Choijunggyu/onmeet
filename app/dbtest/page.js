import getdata from '../actions/getdata'
import insertdata from '../actions/insertdata'
import '../materialize.css'
import Submit from './Submit'

export default async function Page(){
    // insertdata('rrr','0987','jung','rrr@naver.com') 서버사이드에서 부르면 값은 들어가짐

    return(
        <Submit/>
    )
}