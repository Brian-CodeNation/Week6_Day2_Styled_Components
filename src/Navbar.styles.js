import styled from 'styled-components';

export const Wrapper = styled.nav`
    background-color: navy;
    padding: 10px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    display: flex;
    justify-content: space-around;
    align-items: center;

    h1 {
        color: yellow;
    }
`

export const NavItem = styled.a`
    color: white;
    padding: 10px 20px;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        background-color: blue;
    }
`

