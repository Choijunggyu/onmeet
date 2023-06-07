import '../materialize.css'
import Link from 'next/link';

export default function SearchNav(){
    return(
        <div className='center-align row section'>
            <Link className="mexavas-text-blue btn-flat" href='/login/SearchId'>아이디찾기</Link>
            /
            <Link className="mexavas-text-blue btn-flat" href='/login/SearchId'>비밀번호찾기</Link>
        </div>
    )
}