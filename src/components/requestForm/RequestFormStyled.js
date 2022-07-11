import styled from "styled-components";

export const RequestFormContainer = styled.div`
    margin: auto;
    margin-top: 100px;
    padding: 40px;
    width: 550px;
    background-color: #ffffff96;
    border-radius: 12px;

    .request-form-title {
        margin-bottom: 30px;
        font-size: 25px;
        font-weight: 700;
        text-align: center;
        color: #5312eb;
    }

    .request-form {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        
        
        &_label {
            display: flex;
            align-items: flex-start;

            margin-bottom: 20px;
            font-size: 20px;
            font-weight: 500;
            color: #5312eb;
        }

        &_input {
            margin-left: 15px;
            padding: 2px 12px;
            width: 350px;

            background-color: #fff;
            border: 1px solid #5312eb;
            border-radius: 12px;
            color: #5312eb;

            font-family: inherit;
            font-size: inherit;
            font-weight: 400;
            cursor: pointer;

            &:focus{
                outline: none;
            }
        }

        &_select {
            margin-left: 15px;
            padding: 2px 0;
            width: 150px;

            appearance: none;
            outline: none;
            background-color: #fff;
            border: 1px solid #5312eb;
            border-radius: 12px;
            color: #5312eb;

            text-align: center;
            font-family: inherit;
            font-size: inherit;
            font-weight: 400;
            cursor: pointer;
        }

        &_date {
            margin-left: 15px;
            padding: 0.75px 12px;
            width: 150px;

            appearance: none;
            outline: none;
            background-color: #fff;
            border: 1px solid #5312eb;
            border-radius: 12px;
            color: #5312eb;

            text-align: center;
            font-family: inherit;
            font-size: inherit;
            font-weight: 400;
            cursor: pointer;
        }

        &_textarea {
            margin-left: 15px;
            padding: 6px 8px;
            width: 250px;
            resize: none;

            background-color: #fff;
            border: 1px solid #5312eb;
            border-radius: 12px;
            color: #5312eb;

            font-family: inherit;
            font-size: inherit;
            font-weight: inherit;
            cursor: pointer;
        }
    }

    .btn {
        margin: auto;
        padding: 4px 0;
        width: 200px;
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

    .request-form_filter-container {
        display: flex;
        flex-direction: column;
    }

    .request-form_filter {
        margin-left: 15px;
        margin-top: 4px;
        padding: 2px 12px;
        overflow: hidden;
        overflow-y: auto;
        width: 350px;
        height: 100px;
        
        font-size: 15px;
        font-weight: 400;

        border-radius: 12px;
        background-color: #ffffffd8;

        cursor: pointer;

        &::-webkit-scrollbar {
           display: none;
        }

        &-item {
            margin-bottom: 10px;
        }
    }
`;