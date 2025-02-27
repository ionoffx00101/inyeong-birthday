import kakao_send from './assets/btn_send_tiny.png';

export default function Card(){

    return (
        <div className="carousel-item">
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">구매할 물건 이름</h2>
                    <h2 className="card-title">가격</h2>
                    <p>설명</p>
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