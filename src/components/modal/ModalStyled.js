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

    background-image: linear-gradient( 
        to right,
        #ceb6ee, 
        #c7e7d5, 
        #dbf4a2
    );
    z-index: 1200;
    overflow: auto;
`;
