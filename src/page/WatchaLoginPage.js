import React from "react"
import '../css/WatchaLoginPage.css'

const Watcha = () => {
    return (<div>
            <div className="page">
                <nav className="hd-nav">
                    {/*<ul className="logo">*/}
                    {/*</ul>*/}
                    <a href="#" className="logo-a"></a>

                    <ul className="join-ul">
                    <li className="join-bt">
                        <a href="#" className="join-a">회원가입</a>
                    </li>
                    </ul>


                </nav>
                <main className="main-1">
                    <div
                        // src="https://an2-img.amz.wtchn.net/image/v1/watcha/image/upload/v1606807851/pwbnx5h2leuawjgbotdv.webp"
                        className="bg-img">
                        <main className="login-main">
                            <div className="login-content">

                                <div className="login-1">

                                    <span className="login-span">로그인</span>
                                    <a className="login-a" href="#">비밀번호를 잊어버리셨나요?</a>
                                </div>
                                <form className="login-form">
                                    <div className="email-div">
                                        <input className="email-input" type="email"
                                               placeholder="이메일(example@gmail.com"/>
                                    </div>
                                    <div className="password-div">
                                        <input className="password-input" type="password" placeholder="비밀번호"/>
                                    </div>
                                    <div className="lg-bt-div">
                                        <button className="lg-bt">로그인</button>
                                    </div>
                                </form>
                                <p>다른 방법으로 로그인하기</p>
                                <ul className="login-icons">
                                    <li>
                                        <button className="apple"></button>
                                    </li>
                                    <li>
                                        <button className="facebook"></button>
                                    </li>
                                    <li>
                                        <button className="google"></button>
                                    </li>
                                    <li>
                                        <button className="kakao"></button>
                                    </li>
                                    <li>
                                        <button className="line"></button>
                                    </li>
                                    <li>
                                        <button className="twitter"></button>
                                    </li>

                                </ul>

                            </div>
                        </main>
                    </div>
                </main>
                <footer>
            <span>
                <em>
                <a href="#">고객센터(이용 및 결제 문의)</a>
                    </em>
                &nbsp;
                &nbsp;
                <a href="#">cs@watcha.co.kr</a>
                  <span> • </span>
                02-515-9985 (유료)
                &nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;
                <em>제휴 및 대외 협력</em>
                <a href="#">contact@watcha.com</a>
               <span> • </span>
                070-7554-9696 (유료)
                <a href="#"></a>
            </span>
                    <ul>
                        <a></a>
                    </ul>


                </footer>
            </div>

            {/*<div src="https://an2-img.amz.wtchn.net/image/v1/watcha/image/upload/v1606807851/pwbnx5h2leuawjgbotdv.webp"*/}
            {/*     className="bg-img">*/}
            {/*</div>*/}
        </div>
    )
}

export default Watcha
