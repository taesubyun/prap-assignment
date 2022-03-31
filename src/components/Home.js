import React from 'react';

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
                            <h2>관심 가는 투자상품을 </h2>
                        </div>
                        <ul style={{ display: 'flex' }}>
                            <li style={{ border: '1px solid red' }}>
                                <div style={{ border: '1px solid blue' }}>
                                    <img
                                        style={{
                                            border: '1px solid orange',
                                        }}
                                        src='./assets/product1.png'
                                        width='90'
                                        height='90'
                                    ></img>
                                </div>
                                <div style={{ border: '1px solid pink' }}>
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
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;
