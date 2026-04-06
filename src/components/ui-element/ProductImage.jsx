import { styled } from 'styled-components';

const StyledProductImage = styled.img`
    width: 60px;
    height: 60px;
    object-fit: contain;
`;

export function ProductImage({ src, alt }) {
    return <StyledProductImage src={src} alt={alt} />;
}