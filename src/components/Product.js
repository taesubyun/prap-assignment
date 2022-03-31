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
                            <Img src='/assets/test-img1.jpg' alt='' />
                        </ProductImg>
                        <ProductContent>
                            <div>비상장주식</div>
                            <h3>비바리퍼블리카</h3>
                            <div>기업가치 15조 8,112억</div>
                            <div>기업가치 15조 8,112억</div>
                            <div>
                                <span>285주</span>
                                <ProductPrice>97,700원</ProductPrice>
                            </div>
                            <div>
                                <span>39주</span>
                                <ProductPrice>97,800원</ProductPrice>
                            </div>
                            <div>
                                <span>85주</span>
                                <ProductPrice>98,000원</ProductPrice>
                            </div>
                        </ProductContent>
                    </ProductSubject>
                    <ProductSubject>
                        <ProductImg>
                            <Img src='/assets/test-img2.jpg' alt='' />
                        </ProductImg>
                        <ProductContent>
                            <div>NFT</div>
                            <h3> =E V E= </h3>
                            <div>Erich Caparas</div>
                        </ProductContent>
                    </ProductSubject>
                    <ProductSubject>
                        <ProductImg>
                            <Img src='/assets/test-img3.jpg' alt='' />
                        </ProductImg>
                        <ProductContent>
                            <div>NFT</div>
                            <h3> / DEMETER /</h3>
                            <div>Gala Mirissa</div>
                            <div style={{ float: 'right' }}>
                                <div>즉시 구매가</div>
                                <div>11,306,704,382원</div>
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
`;
const ProductSubject = styled.div`
    // boxSizing: 'border-box',
`;

const Img = styled.img`
    width: 323.5px;
    height: 275px;
`;
const ProductImg = styled.div``;
const ProductContent = styled.div`
    margin-top: 10px;
`;
const ProductPrice = styled.span`
    float: right;
    font-color: rgb(33, 34, 35);
    font-size: 24px;
    line-height: 36px;
    font-weight: 500;
`;
