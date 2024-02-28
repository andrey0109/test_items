import React from "react";
import "./Footer.css";
import logo1 from "../assets/logo1.png";


const Footer = () => {
    return (
        <>
            <div className="Footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-5 ft-1">
                        <img src={logo1} className="logo"/>
                            <p>Мастерская по изготовлению и ремонту ювелирных украшений</p>
                            <div className="footer-icons">
                            <a href="https://api.whatsapp.com/send/?phone=79851349294&text&app_absent=0" class="social-media-icon">
                                <i class="fa-brands fa-whatsapp"></i>
                                </a>
                                <a href="https://t.me/LombardValantis" class="social-media-icon">
                                <i class="fa-brands fa-telegram"></i>
                                </a>
                                <a href="https://vk.com/juvelirnyjlombard" class="social-media-icon">
                                <i class="fa-brands fa-vk"></i>
                                </a>
                                <a href="https://ok.ru/group/64297089695989" class="social-media-icon">
                                <i class="fa-brands fa-odnoklassniki"></i>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-12 ft-2">
                            <h5>Мастерская</h5>
                            <ul>
                                <li className="nav-item">
                                    <a className="" href="/">О компании</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Новости</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Контакты</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-3 col-12 ft-2">
                            <h5>Изготовление</h5>
                            <ul>
                                <li className="nav-item">
                                    <a className="" href="/">Каталог</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Новинки</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Акции</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-4 col-12 ft-3">
                            <h5>Связаться с нами</h5>
                            <p><i class="fa-solid fa-phone-volume"></i> +7 (985) 134 92 94</p>
                            <p><i class="fa-solid fa-envelope"></i> zolotaya-tochka@yandex.ru</p>
                            <p><i class="fa-solid fa-paper-plane"></i> Москва, Новокузнецкая, д. 1</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="line"></div>
            <div className='Last-footer'>
            <p className="col-sm">
            &copy;{new Date().getFullYear()}  ООО «Валантис». Все права защищены.
          </p>
            </div>
        </>
    )
}

export default Footer