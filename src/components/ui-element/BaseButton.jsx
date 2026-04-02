import { styled } from "styled-components";

const ActionButton = styled.a`
    color: #1e90ff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #1e90ff;
    padding: 6px 14px;
    border-radius: 30px;
    font-size: 14px;
    text-decoration: none;
    cursor: pointer;
    white-space: nowrap;

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