import { styled } from "styled-components";

const ActionButton = styled.a`
    color: #1e90ff;
    display: inline-block;
    box-sizing: borber-box;
    border: solid #1e90ff 1px;
    width: 90px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    border-radius: 30px;
    margin-left: 4px;
    font-size: 14px;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        background-color: #1e90ff;
        color: white;
    }
`;

export default function BaseButton({ children, onClick, href = '#', ...props }) {
    return (
        <ActionButton
            href={href}
            onClick={() => {
                if (onClick) {
                    e.preventDefault();
                    onClick(e);
                }
            }}
            {...props}
        >
            {children}
        </ActionButton>
    );
}