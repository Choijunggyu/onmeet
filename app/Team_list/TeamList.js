export default function TeamList(props) {

    const teamdata = props.teamdata;
       
    return (
        <>
            <div className='row'>
                <h3 className='center-align'>팀 게시판</h3>
                <div className="divider"></div>
                <div className='row'>
                    {
                        teamdata.map((team) => {
                            const createTimeString = team.createtime.toLocaleString();
                            return (
                                <div className="col s12 m3" key={team.team_id}>
                                    <div className="card grey lighten-3">
                                        <div className="card-content">
                                            <span className="card-title">{team.name}</span>
                                            <p>{team.team_type}</p>
                                            <p>{team.leaderId}</p>
                                            <p>{createTimeString}</p>
                                        </div>
                                        <div className="card-action">
                                            <a href="./../상세내용" className='blue-text'>자세히 보기</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        }   
                    )}
                </div>
            </div>
        </>
    );
}
