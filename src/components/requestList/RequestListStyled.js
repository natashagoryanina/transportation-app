import styled from "styled-components";

export const RequestListContainer = styled.div`
    display: flex;
    flex-direction: column;
    
    .requests-list-title {
        margin-top: 30px;
        margin-bottom: 30px;
        font-size: 25px;
        font-weight: 700;
        text-align: center;
        color: #5312eb;
    }

    .requests-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-right: 40px;
    }
`;