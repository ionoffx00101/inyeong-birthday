import emoji01 from "./assets/emoji_01.png";

export default function Emoji01(){

    return (
        <div className="carousel-item">
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                        src={emoji01} alt={"emoji01"}/>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">둥글도치야 고마워 3</h2>
                    <h2 className="card-title">2500원</h2>
                    <p>귀여운 고슴도치 이모티콘~</p>
                    <div className="card-actions justify-end">
                        <a href="https://e.kakao.com/t/the-little-round-hedgehog-3" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-success">선물하기</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}