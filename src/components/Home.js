import React from 'react';
import styled from 'styled-components';

function Home() {
    return (
        <div className='container' style={{ position: 'relative' }}>
            <div className='vidContainer' style={{ position: 'relative' }}>
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
                        height: '100%',
                        borderRadius: '8px',
                        backgroundColor: 'rgb(254, 254, 254)',
                        boxShadow: 'rgb(0 0 0 / 10%) 0px 0px 15px 0px',
                        padding: '20px 20px',
                    }}
                >
                    <div
                        style={{
                            padding: '10px 15px',
                        }}
                    >
                        <div>
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
                                ?????? ?????? ???????????????
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
                                    ?????? ???????????????
                                </span>
                            </h2>
                        </div>

                        <ProductWrapper>
                            <li>
                                <div>
                                    <ProductImg src='./assets/nft.png'></ProductImg>
                                </div>
                                <div>
                                    <ContainerTitle>NFT</ContainerTitle>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <ProductImg src='./assets/sneakers.png'></ProductImg>
                                </div>
                                <div>
                                    <ContainerTitle>
                                        ???????????? ??????
                                    </ContainerTitle>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <ProductImg src='./assets/piece.png'></ProductImg>
                                </div>
                                <div>
                                    <ContainerTitle>P2P ??????</ContainerTitle>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <ProductImg src='./assets/funding.png'></ProductImg>
                                </div>
                                <div>
                                    <ContainerTitle>
                                        ???????????? ??????
                                    </ContainerTitle>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <ProductImg src='./assets/stock.png'></ProductImg>
                                </div>
                                <div>
                                    <ContainerTitle>????????? ??????</ContainerTitle>
                                </div>
                            </li>
                        </ProductWrapper>
                    </div>
                </div>
                <Button>?????? ???????????? ????????????</Button>
            </div>
        </div>
    );
}
export default Home;

const ProductWrapper = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 10px;
    list-style: none;
    box-sizing: border-box;
`;

const ProductImg = styled.img`
    width: 124px;
    height: 124px;
    fill: none;
`;
// fill : none??
// Container ?????????
const ContainerTitle = styled.h5`
    font-size: 18px;
    font-weight: 400;
    margin: 16px 0 0;
    text-align: center;
    width: 100%;
`;

const Button = styled.button`
    position: absolute;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    width: 235px;
    height: 45px;
    left: calc(50% - 108px);
    bottom: 88px;
    border: none;
    border-radius: 52px;
    background-color: rgb(107, 229, 182);
    cursor: pointer;
}`;
