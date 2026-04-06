import styled from "styled-components";

const RateWrapper = styled.div`
    display: flex;
    gap: 5px;
    justify-content: center;
    align-items: center;
`;

const Stars = styled.div`
    display: flex;
    gap: 2px;

    i.filled {
        color: #f39c12;
        font-size: 13px;
    }
    i.empty {
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
                        className={`fa-star ${i < Math.round(rating) ? 'fa-solid filled' : 'fa-regular empty'}`}
                    />
                ))}
            </Stars>
            {count !== null && <Count>({count})</Count>}
            {showValue && <Count>({rating})</Count>}
        </RateWrapper>
    );
}