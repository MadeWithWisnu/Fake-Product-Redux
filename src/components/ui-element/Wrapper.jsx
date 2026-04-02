import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    width: 100px;

    & > .image-container {
        min-width: 500px;
        height: 620px;
        display: flex;
        alignt-items: center;
        justify-content: center;
        border-right: solid 1px #bdc3c7;
        overflow: hidden;
    }

    & > .image-container > img {
        width: 380px;
    }

    & > .detail-wrapper {
     overflow: auto;
     padding = 0 30px;
     display: flex;
     flex-direction: column;
     justify-content: center;
    }

    & > .detail-wrapper .back-link {
        font-size: 14px;
        font-weight: bold;
        color: #1e90ff;
        text-decoration: none;
    }

    & > .detail-wrapper h1 {
        font-size: 24px;
        margin-top: 35px;
        margin-bottom: 10px;
        color: #4b6584
    }

    & > .detail-wrapper .price {
        color: #546de5;
        font-size: 20px;
        margin-bottom: 20px;
    }

    & > .detail-wrapper .rate {
        display: flex;
        gap: 10px;
        font-size: 16px;
        margin-bottom: 10px;
        align-items: center;
    }

    & > .detail-wrapper .count,
    & > .detail-wrapper .category {
        font-size: 14px;
        margin-bottom: 8px;
    }

    & > .detail-wrapper .count span:first-child,
    & > .detail-wrapper .category span:first-child {
        display: inline-block;
        width: 85px;
        font-weight: bold;
    }

    & > .detail-wrapper .description {
        margin-top: 30px;
        font-size: 16px;
    }

    & > detail-wrapper .description h3 {
        margin: 0 0 8px 0;
        font-size: 14px;
    }

    & > .detail-wrapper .description p {
    margin: 0;
    }
`