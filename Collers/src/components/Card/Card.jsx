export default function Card({companyImg, companyTitle, review, reviewerImg, reviewerName,reviewerTitle}) {
    return (
        <div>
            <div className="card">
                <div className="card-body d-flex flex-column">
                    <div className="d-flex">
                        <img className="rounded-circle" style={{width: "40px", height: "40px"}} src={companyImg}></img>
                        <h3 className="ps-3">{companyTitle}</h3>
                    </div>
                    <div className="d-flex">
                        <p>{review}</p>
                    </div>
                    <div className="d-flex">
                        <img className="rounded-circle" src={reviewerImg} style={{width: "65px", height: "65px"}}></img>
                        <h3 className="ps-3">{reviewerName}<br />{reviewerTitle}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}