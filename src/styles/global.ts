import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
    :root {
        //Primary Palette
        --Color-primary: 255, 87, 127; //#FF577F
        --Color-primary-Focus: 255, 66, 127; //#FF427F
        --Color-primary-Negative: 89, 50, 63; //#59323F

        // Grey Scale Palette
        --Grey-4: 18, 18, 20; //#121214
        --Grey-3: 33, 37, 41; //#212529
        --Grey-2: 52, 59, 65; //#343B41
        --Grey-1: 134, 142, 150; //#868E96
        --Grey-0: 248, 249, 250; //#F8F9FA

        //Feedback Palette
        --Sucess:63, 232, 100; //#3FE864
        --Negative:232, 63, 91; //#E83F5B
    }

    div,img,h1,p,h2,a,form,button,label,input,span,option,select,ul,li,h3,svg {
        margin: 0;
        padding: 0;
        border: none;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        font-weight: normal;
        color: rgba(var(--Grey-0),1);
        font-family: 'Inter', sans-serif;
        outline: none;
    }
`;

export default Global;
