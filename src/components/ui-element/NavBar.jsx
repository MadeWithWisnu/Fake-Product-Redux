import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledNav = styled.nav`
    background-color: white;
    border-bottom: 1px solid #bdc3c7;
    box-shadow: 0 2px 5px #95a5a6;
    text-align: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    min-width: 900px;
    z-index: 100;

    & > .center {
        display: inline-flex;
        padding: 25px 0;
        gap: 60px;
        font-size: 16px;
        align-items: center;
    }

    & h1 {
        margin: 0;
        font-size: 24px;
        font-weigt: normal;
        line-height: 40px;
        color: #4f5966;
    }

    & h1 > strong {
        color: #1e90ff;
        font-weight: bold;
    }
`;

const StyledNavLink = styled(NavLink)`
    height: 25px;
    box-sizing: border-box;
    color: #4b6584;
    text-decoration: none;

    &:hover,
    &.active {
        border-bottom: solid #1e90ff 4px;
    }
`;

export default function NavBar() {
    return (
        <StyledNav>
            <div className="center">
                <StyledNavLink to="/" end>USERS</StyledNavLink>
                <h1><strong>FAKE</strong> Products </h1>
                <StyledNavLink to="/post">PRODUCTS</StyledNavLink>
            </div>
        </StyledNav>
    );
}