import React from 'react';
import styled from 'styled-components';

<<<<<<< HEAD
function Header() {
    return (
        <Container>
            <HeaderLogo src='/assets/prap.png' />
            <HeaderMenu>
                <a style={{ alignItems: 'center', paddingLeft: '120px' }}>
                    <div style={{ fontSize: '20px' }}>홈</div>
                </a>
                <a style={{ alignItems: 'center', paddingLeft: '54px' }}>
                    <div style={{ fontSize: '20px', letterSpacing: '5px' }}>
                        탐색하기
                    </div>
                </a>
            </HeaderMenu>
            <a
                style={{
                    alignItems: 'center',
                    display: 'flex',
                    fontSize: '20px',
                    float: 'right',
                    paddingRight: '50px',
                }}
            >
                <img
                    src='/assets/search.png'
                    style={{
                        width: '20px',
                        padding: '0 35px 0 15px',

                        cursor: 'pointer',
                    }}
                />
                <div style={{ width: '100px', fontSize: '20px' }}>로그인</div>
            </a>
        </Container>
    );
}

export default Header;

const Container = styled.nav`
    height: 70px;
    display: flex;
    align-items: center;
    padding-left: 55px;
    box-shadow: 1px 1px 8px 0px;
`;

const HeaderLogo = styled.img`
    width: 90px;
`;

const HeaderMenu = styled.div`
    display: flex;
    width: 100%;
`;
=======
const HeaderContainer = styled.div`
    border: 1px solid green;
`;
const HeaderLeft = styled.div`
    border: 1px solid blue;
    width: 50%;
    display: flex;
`;
const HeaderLeftBox = styled.div`
    padding-left: 100px;
    display: flex;
`;

const HeaderLeftLogo = styled.div``;
const HeaderLeftMenu = styled.div`
    letter-spacing: 2px;
    padding-left: 150px;
`;

const HeaderLeftMenuContent = styled.div`
    display: flex;
`;

function Header() {
    return (
        <HeaderContainer>
            <HeaderLeft>
                <HeaderLeftBox>
                    <HeaderLeftLogo>PRAP</HeaderLeftLogo>
                    <HeaderLeftMenu>
                        <HeaderLeftMenuContent>
                            <div>홈</div>
                            <div>탐색하기</div>
                        </HeaderLeftMenuContent>
                    </HeaderLeftMenu>
                </HeaderLeftBox>
            </HeaderLeft>
            {/* right */}
            <div className='header-right'></div>
        </HeaderContainer>
    );
}

export default Header;
>>>>>>> 13722790523f5cf113e5eacdd0d07ec8ce7186a5
