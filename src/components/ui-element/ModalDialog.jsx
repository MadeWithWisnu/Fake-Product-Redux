import styled from "styled-components";

const Modal = styled.div`
    background-color: rgba(0, 0, 0, 0.6);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 200;
`;

const Dialog = styled.div`
    background-color: white;
    padding: 30px;
    border-radius: 8px;
    min-width: 320px;

    & > .dialog-header {
        display: flex;
        justify-content: space-between;
        align-items: start;
        margin-bottom: 20px;
    }
    
    & > .dialog-header > h2 {
        margin: 0;
        text-transform: capitalize;
        font-size: 20px;
        color: #4b6584;
    }
    
    & .dialog-header > button {
        padding: 0;
        border: none;
        cursor: pointer;
        font-size: 23px;
        background-color: transparent;
        color: #e74c3c;
        line-height: 1;
    }

    & table td {
        padding-bottom: 10px;
    }

    & table td:first-child {
        padding-right: 20px;
        color: #686de0;
    }

    & fieldset {
        border-color: #bdc3c7;
        border-radius: 4px;
        margin-top: 12px;
    }

    & fieldset legend {
        color: #4b6584;
        padding: 0 6px;
    }
`;

export default function ModalDialog({ children }) {
    return (
        <Modal>
            <Dialog>
                {children}
            </Dialog>
        </Modal>
    );
}