import React from 'react';

function Service() {
    return (
        <div style={{ backgroundColor: 'rgb(243, 244, 245)' }}>
            <div style={{ border: '3px solid red' }}>
                <div
                    style={{
                        border: '2px solid green',
                        textAlign: 'center',
                        marginTop: '48px',
                        // padding: '72px 138px 0px',
                    }}
                >
                    <h2
                        style={{
                            fontSize: '36px',
                            lineHeight: '54px',
                            fontWeight: '700',
                        }}
                    >
                        프랩은 어떤 서비스인가요?
                    </h2>
                    <p>
                        프랩은 국내 최초이자 최대의 대체투자상품 정보 비교
                        플랫폼 입니다. <br />
                        투자시장의 정보격차를 해소하고, 투자자의 합리적인 결정을
                        돕는 것이 목표입니다.
                    </p>
                </div>
                <div>
                    <section
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            paddingBottom: '68px',
                            margin: '0 auto',
                            gap: '24px',
                        }}
                    >
                        <div className='one'>
                            <div
                                style={{
                                    backgroundColor: 'rgb(254, 254, 254)',
                                    width: '100%',
                                    textAlign: 'center',
                                }}
                            >
                                <h2>요즘 투자 트렌드를 빠르게 </h2>
                                <p>
                                    프랩은 빠르게 변화하는 투자 상품 <br />
                                    정보를 객관적으로 전달합니다.
                                </p>
                                <img
                                    src='./assets/serviceImg1.png'
                                    width='308'
                                    height='190'
                                    fill='none'
                                ></img>
                            </div>
                        </div>
                        {/* // */}
                        <div className='one'>
                            <div
                                style={{
                                    backgroundColor: 'rgb(254, 254, 254)',
                                    width: '100%',
                                    textAlign: 'center',
                                }}
                            >
                                <h2>최저가, 최고가를 한눈에 </h2>
                                <p>
                                    플랫폼 간 가격을 비교해서 특정 투자
                                    <br />
                                    상품의 최저가, 최고가를 제공합니다.
                                </p>
                                <img
                                    src='./assets/serviceImg2.png'
                                    width='308'
                                    height='190'
                                    fill='none'
                                ></img>
                            </div>
                        </div>
                        {/* // */}
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Service;
