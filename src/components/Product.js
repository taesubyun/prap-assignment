import React from 'react';
import styled from 'styled-components';

function Product() {
    return (
        <>
            <ProductContainer>
                <ProductTitleBox>
                    <ProductTitle>이 상품은 어떤가요?</ProductTitle>
                </ProductTitleBox>
                <ProductWrapper>
                    <ProductSubject>
                        <ProductImg>
                            <Img src='/assets/test-img1.png' />
                        </ProductImg>
                        <ProductContent>
                            <div>
                                <div
                                    style={{
                                        borderBottom:
                                            '1px solid rgb(239, 240, 243)',
                                        padding: '5px 0',
                                    }}
                                >
                                    비상장주식
                                </div>
                                <h3
                                    style={{
                                        borderBottom:
                                            '1px solid rgb(239, 240, 243)',
                                        padding: '5px 0',
                                    }}
                                >
                                    비바리퍼블리카
                                </h3>
                                <div
                                    style={{
                                        borderBottom:
                                            '1px solid rgb(239, 240, 243)',
                                        padding: '5px 0',
                                    }}
                                >
                                    기업가치 15조 8,112억
                                </div>
                                <div
                                    style={{
                                        borderBottom:
                                            '1px solid rgb(239, 240, 243)',
                                        padding: '10px 0',
                                    }}
                                >
                                    기업가치 15조 8,112억
                                </div>
                            </div>
                            <div
                                style={{
                                    borderBottom:
                                        '1px solid rgb(239, 240, 243)',
                                    padding: '5px 0',
                                }}
                            >
                                <span>285주</span>
                                <ProductPrice>97,700원</ProductPrice>
                            </div>
                            <div
                                style={{
                                    borderBottom:
                                        '1px solid rgb(239, 240, 243)',
                                    padding: '5px 0',
                                }}
                            >
                                <span>39주</span>
                                <ProductPrice>97,800원</ProductPrice>
                            </div>
                            <div
                                style={{
                                    borderBottom:
                                        '1px solid rgb(239, 240, 243)',
                                    padding: '5px 0',
                                }}
                            >
                                <span>85주</span>
                                <ProductPrice>98,000원</ProductPrice>
                            </div>
                        </ProductContent>
                    </ProductSubject>
                    <ProductSubject>
                        <ProductImg>
                            <Img src='/assets/test-img2.png' alt='' />
                        </ProductImg>
                        <ProductContent>
                            <div
                                style={{
                                    borderBottom:
                                        '1px solid rgb(239, 240, 243)',
                                    padding: '5px 0',
                                }}
                            >
                                NFT
                            </div>
                            <h3
                                style={{
                                    borderBottom:
                                        '1px solid rgb(239, 240, 243)',
                                    padding: '5px 0',
                                }}
                            >
                                {' '}
                                =E V E={' '}
                            </h3>
                            <div
                                style={{
                                    borderBottom:
                                        '1px solid rgb(239, 240, 243)',
                                    padding: '5px 0',
                                }}
                            >
                                Erich Caparas
                            </div>
                        </ProductContent>
                    </ProductSubject>
                    <ProductSubject>
                        <ProductImg>
                            <Img src='/assets/test-img3.png' alt='' />
                        </ProductImg>
                        <ProductContent>
                            <div
                                style={{
                                    borderBottom:
                                        '1px solid rgb(239, 240, 243)',
                                    padding: '5px 0',
                                }}
                            >
                                NFT
                            </div>
                            <h3
                                style={{
                                    borderBottom:
                                        '1px solid rgb(239, 240, 243)',
                                    padding: '5px 0',
                                }}
                            >
                                {' '}
                                / DEMETER /
                            </h3>
                            <div
                                style={{
                                    borderBottom:
                                        '1px solid rgb(239, 240, 243)',
                                    padding: '5px 0',
                                }}
                            >
                                Gala Mirissa
                            </div>
                            <div style={{ float: 'right' }}>
                                <div>즉시 구매가</div>
                                <div
                                    style={{
                                        borderBottom:
                                            '1px solid rgb(239, 240, 243)',
                                        padding: '5px 0',
                                    }}
                                >
                                    11,306,704,382원
                                </div>
                            </div>
                        </ProductContent>
                    </ProductSubject>
                </ProductWrapper>
            </ProductContainer>
        </>
    );
}

export default Product;
const ProductContainer = styled.div`
    margin: 0 120px;
    padding: 0px 0px 70px 0;
`;
const ProductTitleBox = styled.div`
    margin: 96px 0 24px;
`;
const ProductTitle = styled.h2`
    text-align: center;
    font-size: 28px;
    font-weight: 700;
    line-height: 42px;
`;
const ProductWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 24px;
    /* box-sizing: border-box; */
`;
const ProductSubject = styled.div``;

const Img = styled.img`
    width: 323.5px;
    height: 275px;
    border-radius: 9px;
`;
const ProductImg = styled.div``;

const ProductContent = styled.div`
    margin-top: 16px;
`;
const ProductPrice = styled.span`
    float: right;
    font-color: rgb(33, 34, 35);
    font-size: 24px;
    line-height: 36px;
    font-weight: 500;
`;
