import React from 'react';
import styled from 'styled-components';

function Service() {
    return (
        <ServcieSection>
            <ServiceContainer>
                <ContainerHeader>
                    <ContainerTitle>프랩은 어떤 서비스인가요?</ContainerTitle>
                    <ContainerSubTitle>
                        프랩은 국내 최초이자 최대의 대체투자상품 정보 비교
                        플랫폼 입니다. <br />
                        투자시장의 정보격차를 해소하고, 투자자의 합리적인 결정을
                        돕는 것이 목표입니다.
                    </ContainerSubTitle>
                </ContainerHeader>
                <div>
                    <ServicesSection>
                        <IntroBox>
                            <IntroTitle>
                                <h2>요즘 투자 트렌드를 빠르게 </h2>
                                <IntroSubTitle>
                                    프랩은 빠르게 변화하는 투자 상품 <br />
                                    정보를 객관적으로 전달합니다.
                                </IntroSubTitle>
                                <Img src='./assets/serviceImg1.png'></Img>
                            </IntroTitle>
                        </IntroBox>

                        <IntroBox>
                            <IntroTitle>
                                <h2>최저가, 최고가를 한눈에</h2>
                                <IntroSubTitle>
                                    플랫폼 간 가격을 비교해서 특정 투자 <br />
                                    상품의 최저가, 최고가를 제공합니다.
                                </IntroSubTitle>
                                <Img src='./assets/serviceImg1.png'></Img>
                            </IntroTitle>
                        </IntroBox>
                        <IntroBox>
                            <IntroTitle>
                                <h2>투자 상품 검색을 한번에 </h2>
                                <IntroSubTitle>
                                    실시간 검색을 통해 각종 플랫폼에 흩어져
                                    <br />
                                    있는 투자 상품들을 한번에 모아줍니다.
                                </IntroSubTitle>
                                <Img src='./assets/serviceImg1.png'></Img>
                            </IntroTitle>
                        </IntroBox>
                    </ServicesSection>
                </div>
            </ServiceContainer>
        </ServcieSection>
    );
}

export default Service;

const ServiceContainer = styled.div``;
const ContainerHeader = styled.div`
    text-align: center;
    margin-top: 55px;
`;
const ContainerTitle = styled.div`
    font-size: 26px;
    line-height: 54px;
    font-weight: 700;
`;
const ContainerSubTitle = styled.div`
    white-space: pre-wrap;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    padding-top: 14px;
`;

const ServcieSection = styled.div`
    background-color: rgb(243, 244, 245);
`;
const ServicesSection = styled.section`
            display:flex;
            justify-content:center;
            padding: 68px 0;
            margin: 0 auto;
            gap 24px`;
const IntroBox = styled.div``;

const IntroTitle = styled.div`
    padding-top: 32px;
    background-color: rgb(254, 254, 254);
    text-align: center;
`;
const IntroSubTitle = styled.p`
    wite-space: pre-wrap;
    font-size: 160x;
    font-weight: 400;
    line-height: 24px;
    padding-top: 18px;
`;
const Img = styled.img`
    width: 345px;
    height: 185px;
    fill: none;
`;
