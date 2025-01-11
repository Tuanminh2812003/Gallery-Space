import WebLine from "../WebLine";
import { FaArrowRight } from "react-icons/fa6";
import sections from "../../constants/data";

function Home_Section2(){
    const { danhSachKhongGian } = sections;
    return(
        <>
            <div className="Web__home__section2">
                    <div className="container-main">
                        <div className="Web__home__section2__inner">
                            <div className="Web__home__section2__inner__header">
                                <div className="Web__home__section2__inner__header__title">
                                    CÁC KHÔNG GIAN KHÁC
                                </div>
                                <div className="Web__home__section2__inner__header__more">
                                    <div className="Web__home__section2__inner__header__more__text">
                                        XEM DANH SÁCH KHÔNG GIAN
                                    </div>
                                    <div className="Web__home__section2__inner__header__more__icon">
                                        <FaArrowRight />
                                    </div>
                                </div>
                            </div>
                            <WebLine />
                            <div className="Web__home__section2__inner__content">
                                <div className="row">
                                    {danhSachKhongGian.slice(0, 4).map((khongGian) => (
                                        <div className="col-3" key={khongGian.id}>
                                            <div className="Web__home__section2__inner__content__box">
                                                <div className="Web__home__section2__inner__content__box__image"
                                                    style={{
                                                        backgroundImage: `url(${khongGian.image})`,
                                                    }}
                                                >

                                                </div>
                                                <div className="Web__home__section2__inner__content__box__title">
                                                    {khongGian.title}
                                                </div>
                                                <div className="Web__home__section2__inner__content__box__author">
                                                    {khongGian.author}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Home_Section2;