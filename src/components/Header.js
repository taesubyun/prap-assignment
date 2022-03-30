import React from 'react';
import styled from 'styled-components';

function Header() {
    return (
        <Container>
            <HeaderLogo src='/assets/prap.png' />
            <HeaderMenu>
                <a
                    href=''
                    target='_blank'
                    style={{
                        color: 'black',
                        textDecoration: 'none',
                        alignItems: 'center',
                        paddingLeft: '120px',
                    }}
                >
                    <div style={{ fontSize: '20px' }}>홈</div>
                </a>
                <a
                    href=''
                    target='_blank'
                    style={{
                        color: 'black',
                        textDecoration: 'none',
                        alignItems: 'center',
                        paddingLeft: '54px',
                    }}
                >
                    <div style={{ fontSize: '20px', letterSpacing: '5px' }}>
                        탐색하기
                    </div>
                </a>
            </HeaderMenu>
            <a
                href=''
                target='_blank'
                style={{
                    alignItems: 'center',
                    display: 'flex',
                    color: 'black',
                    textDecoration: 'none',
                    fontSize: '20px',
                    float: 'right',
                    paddingRight: '20px',
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
            </a>
            <a
                href=''
                target='_blank'
                style={{
                    alignItems: 'center',
                    display: 'flex',
                    color: 'black',
                    textDecoration: 'none',
                    fontSize: '20px',
                    float: 'right',
                }}
            >
                <div
                    style={{
                        width: '100px',
                        fontSize: '20px',
                    }}
                >
                    로그인
                </div>
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
