import React from "react"
import "../../css/WatchaPedia/main.css"

const WatchaPediaMain = () => {

    return (
        <div className="main-container">

            <header>
                <nav>
                    <div className="hd-wrapper">
                        <div className="hd-div">
                            <ul className="hd-ul">
                                <li className="main_logo">
                                    <a>
                                        {/*로고 svg는 잘 모르겠어서 일단 복사해옴*/}
                                        <svg fill="#FF0558" viewBox="0 0 151 37"
                                             className="css-1hftpa0-IcTopNavLogoSvg eqb3akh0">
                                            <g fill="none" fill-rule="evenodd">
                                                <path d="M0 0H151V37H0z"></path>
                                                <g fill="#FF0558" fill-rule="nonzero">
                                                    <path
                                                        d="M36.036 8.028l-4.176 25.2 6.624-.684.396-4.536 3.42-.288.432 4.356 5.904-.612-3.6-23.436h-9zm3.276 15.336l.864-9.648h.792l.9 9.468-2.556.18zM76.68 16.2L75.204 16.272 75.204 8.028 71.064 8.028 71.064 29.088 75.204 28.656 75.204 20.196 76.68 20.124 76.68 28.512 80.424 28.116 80.424 8.028 76.68 8.028zM26.172 0L24.48 24.336 24.084 24.372 20.52 8.028 14.868 8.028 12.24 25.164 11.664 25.164 9.108 8.028.072 8.028 5.508 36 15.66 34.92 17.676 19.116 18.252 19.116 20.952 34.38 29.268 33.516 34.812 0zM47.376 13.968L50.832 13.86 50.832 31.248 55.908 30.708 55.908 13.752 58.788 13.644 58.788 8.028 47.376 8.028zM65.592 26.604l-1.404.108V12.204l1.404-.036v3.96l4.212-.144v-3.888c0-2.592-1.728-4.392-4.932-4.392-3.384 0-5.364 1.8-5.364 4.572v13.86c0 2.88 1.62 4.248 5.292 3.852 3.312-.36 5.04-2.232 5.04-4.968v-4.5l-4.284.252v5.832h.036zM134.172 28.8L138.492 28.332 138.492 8.028 134.172 8.028zM128.124 8.028h-7.164v22.176l6.552-.684c3.996-.432 5.148-2.592 5.148-5.508v-10.44c0-3.24-.9-5.544-4.536-5.544zm-.324 17.388l-1.8.144V12.096l1.836-.036v13.356h-.036zM146.988 27.432l3.78-.396-2.628-19.044h-6.12l-2.304 20.196 4.14-.432.324-3.96 2.448-.216.36 3.852zm-2.556-6.948l.612-7.596h.468l.756 7.488-1.836.108zM82.836 8.028l-1.404 20.016 3.6-.36.108-4.068 1.296-.108.216 3.996 3.168-.324L88.2 8.028h-5.364zm2.376 12.312l.216-7.776h.36l.432 7.704-1.008.072zM113.904 21.348L118.512 21.06 118.512 16.992 113.904 17.208 113.904 12.636 119.196 12.528 119.196 8.028 108.324 8.028 108.324 31.5 119.448 30.348 119.448 25.848 113.904 26.316zM101.772 8.028h-9.036v25.128l6.372-.684V23.22l2.916-.18c2.772-.18 4.86-2.16 4.86-5.004v-4.068c0-2.916-.072-5.94-5.112-5.94zm-.324 11.088l-2.376.108v-6.732l2.376-.036v6.66z"></path>
                                                </g>
                                            </g>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <div>
                                        <button className="btn-none-border">영화</button>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <button className="btn-none-border">TV 프로그램</button>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <button className="btn-none-border">책</button>
                                    </div>
                                </li>

                                <li className="li-middle">
                                    <label for="search-input" className="search-input-label"></label>
                                    <input className="search-input" placeholder="작품 제목, 배우, 감독을 검색해보세요."/>
                                </li>
                                <li className="li-left">
                                    <div className="btn-wrapper">
                                        <button className="btn-none-border">로그인</button>
                                    </div>
                                </li>
                                <li className="li-left">
                                    <div className="btn-wrapper">
                                        <button className="btn-sign-up">회원가입</button>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <section>
                <div className="slide-box">
                    <div className="title-box">박스오피스</div>
                    <div className="slide-content">
                        <ul className="carousel-ul">
                            <li >
                                <a className="card-wrapper">
                                    <div className="card">
                                        <img
                                            src="https://an2-img.amz.wtchn.net/image/v2/132a8068094a7fecd6335c3ab118b5fd.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKaVlXTnJaM0p2ZFc1a0lqcDdJbklpT2pJMU5Td2laeUk2TWpVMUxDSmlJam95TlRWOUxDSmpjbTl3SWpwMGNuVmxMQ0pvWldsbmFIUWlPamN3TUN3aWNHRjBhQ0k2SWk5Mk1pOXpkRzl5WlM5cGJXRm5aUzh4TmpBNU9UZzFNakE1TURjeU56VTFNVEkzSWl3aWNYVmhiR2wwZVNJNk9EQXNJbmRwWkhSb0lqbzBPVEI5Lkc4aXQxaHU5SkR2Nl9CS0xiYi1QRndtTkdqbVlEUEFMWTRCeEFyRjBSSUk"/>
                                    </div>
                                    <div>
                                        <span>name</span>
                                    </div>
                                </a>
                            </li>

                            {/*임시 복붙*/}
                            <li>
                                <a className="card-wrapper">
                                    <div className="card">
                                        <img
                                            src="https://an2-img.amz.wtchn.net/image/v2/132a8068094a7fecd6335c3ab118b5fd.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKaVlXTnJaM0p2ZFc1a0lqcDdJbklpT2pJMU5Td2laeUk2TWpVMUxDSmlJam95TlRWOUxDSmpjbTl3SWpwMGNuVmxMQ0pvWldsbmFIUWlPamN3TUN3aWNHRjBhQ0k2SWk5Mk1pOXpkRzl5WlM5cGJXRm5aUzh4TmpBNU9UZzFNakE1TURjeU56VTFNVEkzSWl3aWNYVmhiR2wwZVNJNk9EQXNJbmRwWkhSb0lqbzBPVEI5Lkc4aXQxaHU5SkR2Nl9CS0xiYi1QRndtTkdqbVlEUEFMWTRCeEFyRjBSSUk"/>
                                    </div>
                                    <div>
                                        <span>name</span>
                                    </div>
                                </a>
                            </li>

                            <li>
                                <a className="card-wrapper">
                                    <div className="card">
                                        <img
                                            src="https://an2-img.amz.wtchn.net/image/v2/132a8068094a7fecd6335c3ab118b5fd.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKaVlXTnJaM0p2ZFc1a0lqcDdJbklpT2pJMU5Td2laeUk2TWpVMUxDSmlJam95TlRWOUxDSmpjbTl3SWpwMGNuVmxMQ0pvWldsbmFIUWlPamN3TUN3aWNHRjBhQ0k2SWk5Mk1pOXpkRzl5WlM5cGJXRm5aUzh4TmpBNU9UZzFNakE1TURjeU56VTFNVEkzSWl3aWNYVmhiR2wwZVNJNk9EQXNJbmRwWkhSb0lqbzBPVEI5Lkc4aXQxaHU5SkR2Nl9CS0xiYi1QRndtTkdqbVlEUEFMWTRCeEFyRjBSSUk"/>
                                    </div>
                                    <div>
                                        <span>name</span>
                                    </div>
                                </a>
                            </li>

                            <li>
                                <a className="card-wrapper">
                                    <div className="card">
                                        <img
                                            src="https://an2-img.amz.wtchn.net/image/v2/132a8068094a7fecd6335c3ab118b5fd.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKaVlXTnJaM0p2ZFc1a0lqcDdJbklpT2pJMU5Td2laeUk2TWpVMUxDSmlJam95TlRWOUxDSmpjbTl3SWpwMGNuVmxMQ0pvWldsbmFIUWlPamN3TUN3aWNHRjBhQ0k2SWk5Mk1pOXpkRzl5WlM5cGJXRm5aUzh4TmpBNU9UZzFNakE1TURjeU56VTFNVEkzSWl3aWNYVmhiR2wwZVNJNk9EQXNJbmRwWkhSb0lqbzBPVEI5Lkc4aXQxaHU5SkR2Nl9CS0xiYi1QRndtTkdqbVlEUEFMWTRCeEFyRjBSSUk"/>
                                    </div>
                                    <div>
                                        <span>name</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

            </section>
            <footer></footer>
        </div>

    )
}

export default WatchaPediaMain
