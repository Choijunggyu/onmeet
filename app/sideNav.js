import Link from "next/link"


export default function SideNav(){
    return(
        <div className="center-align">
            <h3>메뉴</h3>
            <div className="divider"></div>
            <ul>
                <Link className="mexavas-text-white mexavas-large-zize "href="/Team_list"><li>팀 게시판</li></Link><br/>
                <Link className="mexavas-text-white mexavas-large-zize "href="/Team_register"><li>팀 생성</li></Link><br/>
                <Link className="mexavas-text-white mexavas-large-zize "href="/Team_manage"><li>내 팀 관리</li></Link><br/>
            </ul>
        </div>
    )
}
