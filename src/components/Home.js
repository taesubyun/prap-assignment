import React from 'react';
import styled from 'styled-components';

function Home() {
    return (
        <div className='container' style={{ position: 'relative' }}>
            <div
                className='vidContainer'
                style={{ position: 'relative', zIndex: '0' }}
            >
                <video
                    className='faceVideo'
                    autoPlay
                    muted
                    loop
                    playsinline
                    style={{
                        objectFit: 'cover',
                        objectPosition: 'center',
                        width: '100%',
                        height: '445px',
                        position: 'absoulte',
                    }}
                >
                    <source src='/assets/video.mp4' type='video/mp4' />
                </video>
                <div
                    className='overlay'
                    style={{
                        position: 'relative',
                        top: '-150px',
                        left: '120px',
                        width: 'calc(100% - 240px)',
                        height: '340px',
                        borderRadius: '22px',
                        backgroundColor: 'white',
                        padding: '15px 15px',
                    }}
                >
                    <div
                        style={{
                            border: '2px solid white',
                            padding: '10px 20px',
                        }}
                    >
                        <div style={{ border: '2px solid black' }}>
                            <h2
                                style={{
                                    textAlign: 'center',
                                    margin: ' 0 auto',
                                    fontSize: '28px',
                                    lineHiehgt: '54px',
                                    fontWeight: '400',
                                    width: 'fitContent',
                                    boxSizing: 'borderBox',
                                }}
                            >
                                관심 가는 투자상품을
                                {/* <br
                                    style={{
                                        display: 'none',
                                    }}
                                ></br> */}
                                <span
                                    style={{
                                        fontWeight: '700',
                                        fontSize: '28px',
                                        lineHeight: '54px',
                                    }}
                                >
                                    모두 골라보세요
                                </span>
                            </h2>
                        </div>

                        <ProductWrapper>
                            <li>
                                <div>
                                    <ProductImg src='./assets/product1.png'></ProductImg>
                                </div>
                                <div>
                                    <h5
                                        style={{
                                            fontSize: '18px',
                                            fontWeight: '400',
                                            lineHeight: '27px',
                                            margin: '16px 0px 0px',
                                            textAlign: 'center',
                                            width: '100%',
                                        }}
                                    >
                                        NFT
                                    </h5>
                                </div>
                            </li>
                        </ProductWrapper>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;

const ProductWrapper = styled.ul`
    display: flex;
`;

const ProductImg = styled.img`
    width: 124px;
    height: 124px;
    fill: none;
`;
// fill : none??
