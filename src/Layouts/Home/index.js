import "./Home.scss";
import { MdArrowOutward } from "react-icons/md";
import WebLine from "../../Components/WebLine";
import Home_Section2 from "../../Components/Home_Section2";
import { Link } from "react-router-dom";

function Home(){
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
                                <Link to={"/listspace"}>
                                    <div className="Web__home__sectionMain__inner__button__text">
                                        KHÁM PHÁ
                                    </div>
                                    <div   div className="Web__home__sectionMain__inner__button__icon">
                                        <MdArrowOutward />
                                    </div>
                                </Link>
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
                                    <div className="col-md-6">
                                        <div className="Web__home__section1__inner__content__left__image4">

                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="Web__home__section1__inner__content__right">
                                            <div className="Web__home__section1__inner__content__right__disc">
                                                KHÔNG GIAN TRƯNG BÀY
                                            </div>
                                            <div className="Web__home__section1__inner__content__right__title">
                                                NGHỆ THUẬT SÁNG TẠO
                                            </div>
                                            <div className="Web__home__section1__inner__content__right__author">
                                                <div className="Web__home__section1__inner__content__right__author__disc">
                                                    Nghệ sĩ
                                                </div>
                                                <div className="Web__home__section1__inner__content__right__author__title">
                                                    Đại học quốc gia Hà Nội
                                                </div>
                                            </div>
                                            <div className="Web__home__section1__inner__content__right__author">
                                                <div className="Web__home__section1__inner__content__right__author__disc">
                                                    Thể loại
                                                </div>
                                                <div className="Web__home__section1__inner__content__right__author__title">
                                                    Kiến trúc
                                                </div>
                                            </div>
                                            <div className="Web__home__section1__inner__content__right__text">
                                                Như các nhà giáo dục đã nêu, việc tạo ra một trải nghiệm nghệ thuật mà không có bất kỳ tác phẩm nghệ thuật vật lý nào đang được đề cập và không ảnh hưởng đến tầm nhìn của nghệ sĩ không phải là một nỗ lực nhỏ. May mắn thay, Beyond có sự trợ giúp của vô số máy chiếu, 300 tác phẩm nghệ thuật và 30.000 feet vuông không gian, để đưa sự đắm chìm lên một tầm cao mới và thổi hồn chuyển động vào cuộc sống tĩnh lặng.
                                            </div>
                                            <div className="Web__home__section1__inner__content__right__button">
                                                <Link to={"/space/nghe_thuat_sang_tao"}>
                                                    <div className="Web__home__section1__inner__content__right__button__text">
                                                        KHÁM PHÁ KHÔNG GIAN
                                                    </div>
                                                    <div   div className="Web__home__section1__inner__content__right__button__icon">
                                                        <MdArrowOutward />
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <WebLine/>
                                <div className="row r2">
                                    <div className="col-md-6">
                                        <div className="Web__home__section1__inner__content__left__image1">

                                        </div>
                                    </div>
                                    <div className="col-md-6">
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
                                                <Link to={"/listspace"}>
                                                    <div className="Web__home__section1__inner__content__right__button__text">
                                                        KHÁM PHÁ KHÔNG GIAN
                                                    </div>
                                                    <div   div className="Web__home__section1__inner__content__right__button__icon">
                                                        <MdArrowOutward />
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <WebLine/>
                                <div className="row r1">
                                    <div className="col-md-6">
                                        <div className="Web__home__section1__inner__content__left__image2">

                                        </div>
                                    </div>
                                    <div className="col-md-6">
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
                                                <Link to={"/listspace"}>
                                                    <div className="Web__home__section1__inner__content__right__button__text">
                                                        KHÁM PHÁ KHÔNG GIAN
                                                    </div>
                                                    <div   div className="Web__home__section1__inner__content__right__button__icon">
                                                        <MdArrowOutward />
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <WebLine/>
                                <div className="row r2">
                                    <div className="col-md-6">
                                        <div className="Web__home__section1__inner__content__left__image3">

                                        </div>
                                    </div>
                                    <div className="col-md-6">
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
                                                <Link to={"/listspace"}>
                                                    <div className="Web__home__section1__inner__content__right__button__text">
                                                        KHÁM PHÁ KHÔNG GIAN
                                                    </div>
                                                    <div   div className="Web__home__section1__inner__content__right__button__icon">
                                                        <MdArrowOutward />
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Home_Section2/>
            </div>
        </>
    )
}

export default Home;