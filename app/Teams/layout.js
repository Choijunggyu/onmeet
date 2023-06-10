import './../materialize.css';
import TopNav from '../topnav.js';

export default function TeamListLayout({children}){
    return(
        <>
        < TopNav/>
         <section>   
            <h3 className="center-align ">전체 팀 목록</h3>
            <div className="divider"></div>
            <div className="row section">
            <div className="row">
            {children}


            </div>
            </div>
        </section>
        </>
       
    )
}
