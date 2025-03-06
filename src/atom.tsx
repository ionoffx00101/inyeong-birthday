import atom from "./assets/atom.jpg";

export default function Atom(){

    return (
        <div className="carousel-item">
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                        src={atom} alt={"emoji01"}/>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Fallout 76 4000 atom</h2>
                    <h2 className="card-title">46,160원</h2>
                    <p>폴아웃 76에서 예쁜 옷을 살래요</p>
                    <div className="card-actions justify-end">
                        <a href="https://store.steampowered.com/app/1158670/Fallout_76_Atoms/" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-success">선물하기</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}