import styled from "styled-components";

export const ModalContainer = styled.div`
    position: fixed;
    margin: auto;
    top: 75px;
    left: 0;
    right: 0;
    width: 700px;
    height: 700px;
    border-radius: 12px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    background-image: linear-gradient( 
        to right,
        #ceb6ee, 
        #c7e7d5, 
        #dbf4a2
    );
    z-index: 1200;
    overflow: auto;

    .modal-close {
        position: absolute;
        top: 20px;
        right: 20px;

        &_icon {
            width: 20px;
            height: 20px;
            fill: #5312eb;
            cursor: pointer;
        }
    }
`;
