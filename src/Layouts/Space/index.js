import "./Space.scss";
import { useParams } from "react-router-dom";
import sections from "../../constants/data";
import { MdArrowOutward } from "react-icons/md";
import Home_Section2 from "../../Components/Home_Section2";
import { Link } from "react-router-dom";

function Space() {
    const { prop } = useParams(); // Lấy prop từ URL
    const { danhSachKhongGian } = sections;

    // Tìm thông tin không gian theo prop
    const khongGian = danhSachKhongGian.find((item) => item.prop === prop);

    if (!khongGian) {
        return <div>Không tìm thấy không gian!</div>;
    }

    // Tách description bằng dấu `/`
    const descriptionParts = (khongGian.description || "").split('/');

    return (
        <>
            <div className="Space"
                style={{
                    backgroundImage: `url(${khongGian.spaceImage})`,
                }}
            >
                <div className="container-main">
                    <div className="Space__inner">
                        <div className="Space__inner__disc">KHÔNG GIAN TRƯNG BÀY</div>
                        <div className="Space__inner__title">{khongGian.title}</div>
                        <div className="Space__inner__info">
                            <div className="Space__inner__info__item">
                                <div className="Space__inner__info__item__item">
                                    Nghệ sĩ
                                </div>
                                <div className="Space__inner__info__item__item">
                                    Thể loại
                                </div>
                            </div>
                            <div className="Space__inner__info__item2">
                                <div className="Space__inner__info__item2__item">
                                    {khongGian.author}
                                </div>
                                <div className="Space__inner__info__item2__item">
                                    {khongGian.type}
                                </div>
                            </div>
                        </div>
                        <Link to={khongGian.web} className="Space__inner__button">
                            <div className="Space__inner__button__inner">
                                <div className="Space__inner__button__inner__text">KHÁM PHÁ KHÔNG GIAN</div>
                                <div className="Space__inner__button__inner__icon">
                                    <MdArrowOutward/>
                                </div>
                            </div>
                        </Link>
                        {/* Render từng phần của description */}
                        {descriptionParts.map((part, index) => (
                            <div key={index} className="Space__inner__des">
                                {part.trim()}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Home_Section2/>
        </>
    );
}

export default Space;
