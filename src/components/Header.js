import React from 'react';
import styled from 'styled-components';

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
