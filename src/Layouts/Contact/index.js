import "./Contact.scss";

function Contact(){
    return (
        <>
            <div className="Contact">
                <div className="container-main">
                    <div className="Contact__inner">
                        <div className="row">
                            <div className="col-4">
                                <div className="Contact__inner__left">
                                    <div className="Contact__inner__left__title">
                                        LIÊN HỆ
                                    </div>
                                    <div className="Contact__inner__left__disc">
                                        Đối với hầu hết các câu hỏi về tính năng, chức năng và giá cả, cách nhanh nhất là truy cập phần Trợ giúp & Hướng dẫn của chúng tôi, đặc biệt là các trang Câu hỏi thường gặp, Hướng dẫn và Giá cả.
                                    </div>
                                </div>
                            </div>
                            <div className="col-8">
                                <div className="Contact__inner__right">
                                    <label>TÊN CỦA BẠN</label>
                                    <input type="text" placeholder="Ngô Thị Hồng Nhung"/>
                                    <label>EMAIL CỦA BẠN</label>
                                    <input type="text" placeholder="hongnhung.minha@gmail.com"/>
                                    <label>SUBJECT</label>
                                    <input type="text" placeholder="Mục đích liên hệ"/>
                                    <label>MESSAGE</label>
                                    <textarea placeholder="Viết lời nhắn của bạn tại đây"></textarea>
                                    <div className="Contact__inner__right__button">
                                        <div className="Contact__inner__right__button__inner">
                                            GỬI LỜI NHẮN
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;