import { styled } from 'styled-components';

const StyledImageContainer = styled.div`
    flex-shrink: 0;
    width: 340px;
    background: linear-gradient(145deg, #f0f4ff, #e8ecf8);
    border-radius: 20px;
    padding: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: inset 0 2px 8px rgba(0,0,0,0.06), 0 8px 32px rgba(84,109,229,0.12);
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        width: 200px;
        height: 200px;
        background: radial-gradient(circle, rgba(84,109,229,0.08) 0%, transparent 70%);
        top: -40px;
        right: -40px;
        border-radius: 50%;
    }

    img {
        width: 260px;
        height: 260px;
        object-fit: contain;
        position: relative;
        z-index: 1;
        filter: drop-shadow(0 8px 24px rgba(0,0,0,0.12));
        transition: transform 0.3s ease;

        &:hover {
            transform: scale(1.04);
        }
    }
`;

export function ImageContainer({ children }) {
    return <StyledImageContainer>{children}</StyledImageContainer>;
}