import React from 'react';
import styled from 'styled-components';

function Footer() {
    return (
        <ContentInfo>
            <ContentMenuBox>
                <ContentContainer>
                    <div>
                        <ContentMenu>
                            <img
                                src='/assets/prap.png'
                                widht='92'
                                height='22'
                                fill='none'
                                style={{ marginBottom: '10px' }}
                            ></img>
                            <MenuList
                                href='https://about.prap.kr/'
                                target='-_blank'
                            >
                                회사소개
                            </MenuList>
                            <MenuList
                                href='https://about.prap.kr/career'
                                target='-_blank'
                            >
                                프랩 합류하기
                            </MenuList>
                            <MenuList
                                href='https://about.prap.kr/contact'
                                target='-_blank'
                            >
                                제휴제안
                            </MenuList>
                        </ContentMenu>
                    </div>

                    <div>
                        <ContentMenu>
                            <div>
                                <MenuHeader>안내</MenuHeader>
                            </div>
                            <MenuList href='/' target='-_blank'>
                                공지사항
                            </MenuList>
                            <MenuList href='/' target='-_blank'>
                                이벤트
                            </MenuList>
                        </ContentMenu>
                    </div>

                    <div>
                        <ContentMenu>
                            <div>
                                <MenuHeader>정책</MenuHeader>
                            </div>
                            <MenuList href='' target='-_blank'>
                                이용약관
                            </MenuList>
                            <MenuList href='' target='-_blank'>
                                개인정보처리방침
                            </MenuList>
                        </ContentMenu>
                    </div>
                </ContentContainer>
            </ContentMenuBox>

            <CompanyInfo>
                <BoldSpan>대표이사</BoldSpan>
                <WeightSpan>박아윤</WeightSpan>
                <BoldSpan> | </BoldSpan>
                <BoldSpan>사업자등록번호</BoldSpan>
                <WeightSpan>622-88-01428</WeightSpan>
                <BoldSpan>|</BoldSpan>
                <BoldSpan>주소</BoldSpan>
                <WeightSpan>서울시 강남구 역삼로 172, 8층</WeightSpan>
                <BoldSpan>|</BoldSpan>
                <BoldSpan>문의</BoldSpan>
                <WeightSpan>hello@prap.kr</WeightSpan>
            </CompanyInfo>
            <InfoDropdown>
                <WeightSpan>©All rights reserved. 2022. (주)타르트</WeightSpan>
            </InfoDropdown>
        </ContentInfo>
    );
}

export default Footer;

const ContentInfo = styled.div`
    padding-top: 30px;
`;

const ContentMenuBox = styled.div`
    display: flex;
    padding: 0px 120px;
`;

const ContentContainer = styled.div`
    display: flex;
    width: 100%;
    gap: 66px;
`;
const ContentMenu = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const MenuHeader = styled.h3`
    margin: 0px 0px 4px;
    font-size: 18px;
    line-height: 27px;
    font-weight: 400;
`;
const MenuList = styled.a`
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: rgb(104, 105, 107);
    cursor: pointer;
    text-decoration: none;
`;

const CompanyInfo = styled.div`
    display: flex;
    color: rgb(179, 180, 183);
    padding: 30px 120px 0px 120px;
    gap: 7px;
`;

const BoldSpan = styled.span`
    font-size: 12px;
    line-height: 18px;
    font-weight: 700;
`;

const WeightSpan = styled.span`
    font-size: 12px;
    line-ehight: 18px;
    font-weight: 400;
`;

const InfoDropdown = styled.div`
    padding: 0px 120px 30px 120px;
    color: rgb(179, 180, 183);
    gap: 7px;
`;
