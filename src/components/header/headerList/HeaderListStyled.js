import styled from "styled-components";

export const HeaderListContainer = styled.div`
    display: flex;
    align-items: center;

    .header-list {
        display: flex;
        align-items: center;

        &_item {
            font-size: 25px;
            font-weight: 700;
            cursor: pointer;

            &:not(:last-child) {
                margin-right: 20px;
            }
        }

        &_link {
            text-decoration: none;
            color: #5312eb;

            &-active {
                text-decoration: none;
                color: #5312eb;
            }

            &:hover {
                color: #b284ee;
            }
        }
    }
`;