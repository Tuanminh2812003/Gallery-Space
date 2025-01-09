import "./Home.scss";
import { MdArrowOutward } from "react-icons/md";
import WebLine from "../../Components/WebLine";
import { FaArrowRight } from "react-icons/fa6";
import sections from "../../constants/data";

function Home(){
    const { danhSachKhongGian } = sections;
    return(
        <>
            <div className="Web__home">
                <div className="Web__home__sectionMain">
                    <div className="container-main">
                        <div className="Web__home__sectionMain__inner">
                            <div className="Web__home__sectionMain__inner__title">
                                    KHÁM PHÁ NGHỆ THUẬT KHÔNG GIỚI HẠN
                            </div>
                            <div className="Web__home__sectionMain__inner__button">
                                <div className="Web__home__sectionMain__inner__button__text">
                                    ĐĂNG KÝ MIỄN PHÍ
                                </div>
                                <div className="Web__home__sectionMain__inner__button__icon">
                                    <MdArrowOutward />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Web__home__section1">
                    <div className="container-main">
                        <div className="Web__home__section1__inner">
                            <div className="Web__home__section1__inner__title">
                                KHÁM PHÁ KHÔNG GIAN
                            </div>
                            <WebLine/>
                            <div className="Web__home__section1__inner__content">
                                <div className="row r1">
                                    <div className="col-6">
                                        <div className="Web__home__section1__inner__content__left__image1">

                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="Web__home__section1__inner__content__right">
                                            <div className="Web__home__section1__inner__content__right__disc">
                                                KHÔNG GIAN TRƯNG BÀY
                                            </div>
                                            <div className="Web__home__section1__inner__content__right__title">
                                                PHƯỢNG HOÀNG RỰC LỬA
                                            </div>
                                            <div className="Web__home__section1__inner__content__right__author">
                                                <div className="Web__home__section1__inner__content__right__author__disc">
                                                    Nghệ sĩ
                                                </div>
                                                <div className="Web__home__section1__inner__content__right__author__title">
                                                    Đa nghệ sĩ
                                                </div>
                                            </div>
                                            <div className="Web__home__section1__inner__content__right__author">
                                                <div className="Web__home__section1__inner__content__right__author__disc">
                                                    Thể loại
                                                </div>
                                                <div className="Web__home__section1__inner__content__right__author__title">
                                                    Digital Art
                                                </div>
                                            </div>
                                            <div className="Web__home__section1__inner__content__right__text">
                                                Như các nhà giáo dục đã nêu, việc tạo ra một trải nghiệm nghệ thuật mà không có bất kỳ tác phẩm nghệ thuật vật lý nào đang được đề cập và không ảnh hưởng đến tầm nhìn của nghệ sĩ không phải là một nỗ lực nhỏ. May mắn thay, Beyond có sự trợ giúp của vô số máy chiếu, 300 tác phẩm nghệ thuật và 30.000 feet vuông không gian, để đưa sự đắm chìm lên một tầm cao mới và thổi hồn chuyển động vào cuộc sống tĩnh lặng.
                                            </div>
                                            <div className="Web__home__section1__inner__content__right__button">
                                                <div className="Web__home__section1__inner__content__right__button__text">
                                                    KHÁM PHÁ KHÔNG GIAN
                                                </div>
                                                <div className="Web__home__section1__inner__content__right__button__icon">
                                                    <MdArrowOutward />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <WebLine/>
                                <div className="row r2">
                                    <div className="col-6">
                                        <div className="Web__home__section1__inner__content__left__image2">

                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="Web__home__section1__inner__content__right">
                                            <div className="Web__home__section1__inner__content__right__disc">
                                                KHÔNG GIAN TRƯNG BÀY
                                            </div>
                                            <div className="Web__home__section1__inner__content__right__title">
                                                LONG HỔ PHONG VÂN
                                            </div>
                                            <div className="Web__home__section1__inner__content__right__author">
                                                <div className="Web__home__section1__inner__content__right__author__disc">
                                                    Nghệ sĩ
                                                </div>
                                                <div className="Web__home__section1__inner__content__right__author__title">
                                                    Đa nghệ sĩ
                                                </div>
                                            </div>
                                            <div className="Web__home__section1__inner__content__right__author">
                                                <div className="Web__home__section1__inner__content__right__author__disc">
                                                    Thể loại
                                                </div>
                                                <div className="Web__home__section1__inner__content__right__author__title">
                                                    Digital Art
                                                </div>
                                            </div>
                                            <div className="Web__home__section1__inner__content__right__text">
                                                Như các nhà giáo dục đã nêu, việc tạo ra một trải nghiệm nghệ thuật mà không có bất kỳ tác phẩm nghệ thuật vật lý nào đang được đề cập và không ảnh hưởng đến tầm nhìn của nghệ sĩ không phải là một nỗ lực nhỏ. May mắn thay, Beyond có sự trợ giúp của vô số máy chiếu, 300 tác phẩm nghệ thuật và 30.000 feet vuông không gian, để đưa sự đắm chìm lên một tầm cao mới và thổi hồn chuyển động vào cuộc sống tĩnh lặng.
                                            </div>
                                            <div className="Web__home__section1__inner__content__right__button">
                                                <div className="Web__home__section1__inner__content__right__button__text">
                                                    KHÁM PHÁ KHÔNG GIAN
                                                </div>
                                                <div className="Web__home__section1__inner__content__right__button__icon">
                                                    <MdArrowOutward />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <WebLine/>
                                <div className="row r1">
                                    <div className="col-6">
                                        <div className="Web__home__section1__inner__content__left__image3">

                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="Web__home__section1__inner__content__right">
                                            <div className="Web__home__section1__inner__content__right__disc">
                                                KHÔNG GIAN TRƯNG BÀY
                                            </div>
                                            <div className="Web__home__section1__inner__content__right__title">
                                                THẦN CÁ VOI
                                            </div>
                                            <div className="Web__home__section1__inner__content__right__author">
                                                <div className="Web__home__section1__inner__content__right__author__disc">
                                                    Nghệ sĩ
                                                </div>
                                                <div className="Web__home__section1__inner__content__right__author__title">
                                                    Đa nghệ sĩ
                                                </div>
                                            </div>
                                            <div className="Web__home__section1__inner__content__right__author">
                                                <div className="Web__home__section1__inner__content__right__author__disc">
                                                    Thể loại
                                                </div>
                                                <div className="Web__home__section1__inner__content__right__author__title">
                                                    Digital Art
                                                </div>
                                            </div>
                                            <div className="Web__home__section1__inner__content__right__text">
                                                Như các nhà giáo dục đã nêu, việc tạo ra một trải nghiệm nghệ thuật mà không có bất kỳ tác phẩm nghệ thuật vật lý nào đang được đề cập và không ảnh hưởng đến tầm nhìn của nghệ sĩ không phải là một nỗ lực nhỏ. May mắn thay, Beyond có sự trợ giúp của vô số máy chiếu, 300 tác phẩm nghệ thuật và 30.000 feet vuông không gian, để đưa sự đắm chìm lên một tầm cao mới và thổi hồn chuyển động vào cuộc sống tĩnh lặng.
                                            </div>
                                            <div className="Web__home__section1__inner__content__right__button">
                                                <div className="Web__home__section1__inner__content__right__button__text">
                                                    KHÁM PHÁ KHÔNG GIAN
                                                </div>
                                                <div className="Web__home__section1__inner__content__right__button__icon">
                                                    <MdArrowOutward />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
            </div>
        </>
    )
}

export default Home;