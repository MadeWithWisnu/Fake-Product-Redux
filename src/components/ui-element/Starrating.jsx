import styled from "styled-components";

const RateWrapper = styled.div`
    display: flex;
    gap: 5px;
    align-items: center;
    justify-content: center;
`;

const Stars = styled.div`
    & > i.filled {
        color: #f39c12;
    }
    & > i {
        color: #bdc3c7;
        font-size: 13px;
    }
`;

const Count = styled.span`
    font-size: 13px;
    color: #4b6584;
`;

export default function StarRating({ rating = 0, count = null, showValue = false }) {
    return (
        <RateWrapper>
            <Stars>
                {Array.from({ length: 5 }, (_, i) => (
                    <i
                        key={i}
                        className={`fas fa-star${i < Math.round(rating) ? 'filled' : ''}`}
                    />
                ))}
            </Stars>
            {count !== null && <Count>{(count)}</Count>}
            {showValue && <Count>{(rating)}</Count>}
        </RateWrapper>
    );
}