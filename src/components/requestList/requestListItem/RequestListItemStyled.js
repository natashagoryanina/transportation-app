import styled from "styled-components";

export const RequestListItemContainer = styled.li`
    margin-left: 40px;
    margin-bottom: 40px;
    padding: 20px;
    width: 350px;

    background-color: #ffffff96;
    border-radius: 12px;

    .request-list {
        &_text {
            margin-right: 7px;
            font-weight: 700;
        }

        &_paragraph {
            font-size: 20px;
            font-weight: 400;
            color: #5312eb;

            &:not(:last-child) {
                margin-bottom: 10px;
            }
        }
    }

    .btn {
        margin: auto;
        padding: 2px 0;
        width: 100px;
        background-color: #5312eb;
        border: 1px solid #5312eb;
        border-radius: 12px;
        color: #fff;

        font-family: inherit;
        font-size: 20px;
        font-weight: 400;
        cursor: pointer;

        &:hover {
            background-color: #fff;
            color: #5312eb;
        }
    }
`;