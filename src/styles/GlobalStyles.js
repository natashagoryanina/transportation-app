import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
     body {
        
        font-family: 'Ubuntu', sans-serif;
        background-image: linear-gradient( 
            to right,
            #ceb6ee, 
            #c7e7d5, 
            #dbf4a2
        );
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    h1,
    h2,
    h3,
    p {
        margin: 0;
    }
`;