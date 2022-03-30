import React from 'react';
import styled from 'styled-components';

function Product() {
    return (
        <>
            <div style={{ border: ' 1px solid blue' }}>
                <div
                    style={{
                        textAlign: 'center',
                        border: '1px solid red',
                    }}
                >
                    <h2>이 상품은 어떤가요?</h2>
                </div>
                <div
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                    <div
                        className='product-wrapper'
                        style={{
                            boxSizing: 'border-box',
                            padding: '0 45px 0 45px',
                        }}
                    >
                        <Img src='/assets/test-img1.jpg' alt='' />
                        <div>
                            <div>비상장주식</div>
                            <h3>비바리퍼블리카</h3>
                            <div>기업가치 15조 8,112억</div>
                            <div>기업가치 15조 8,112억</div>
                            <div>
                                <span>285주</span>
                                <span style={{ float: 'right' }}>97,700원</span>
                            </div>
                            <div>
                                <span>39주</span>
                                <span style={{ float: 'right' }}>97,800원</span>
                            </div>
                            <div>
                                <span>85주</span>
                                <span style={{ float: 'right' }}>98,000원</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Img src='/assets/test-img2.jpg' alt='' />
                        <div>
                            <div>NFT</div>
                            <h3> =E V E= </h3>
                            <div>Erich Caparas</div>
                        </div>
                    </div>
                    <div>
                        <Img src='/assets/test-img3.jpg' alt='' />
                        <div>
                            <div>NFT</div>
                            <div>Awaken</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Product;

const Img = styled.img`
    width: 323.5px;
    height: 275px;
`;
