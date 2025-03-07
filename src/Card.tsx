import kakao_send from './assets/btn_send_tiny.png';
import watch from "./assets/watch.png";
import emoji01 from "./assets/emoji_01.png";

export default function Card(){

    return (
        <div className="carousel-item">
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <div className="w-96 h-96 flex items-center justify-center bg-white border">
                        <img src={watch} alt={emoji01} className="max-w-full max-h-full object-contain" />
                    </div>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">애플워치 울트라 3</h2>
                    <h2 className="card-title">140만원 예상</h2>
                    <p>예.. 미래에 나올 애플워치 울트라 3가 가지고 싶습니다.</p>
                    <div className="card-actions justify-end">
                        <a href="https://link.kakaopay.com/_/byvj2Zk" target="_blank" rel="noopener noreferrer">
                            <button>
                                <img src={kakao_send} alt="Kakao Send" />
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}