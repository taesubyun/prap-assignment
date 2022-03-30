import React from 'react';

function Home() {
    return (
        <>
            <video
                autoPlay
                muted
                loop
                playsinline
                width='100%'
                height='445px'
                style={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                    width: '100%',
                    height: '380px',
                    position: 'relative',
                }}
            >
                <source src='/assets/video.mp4' type='video/mp4' />
            </video>
        </>
    );
}

export default Home;
