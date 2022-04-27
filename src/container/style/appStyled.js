import styled from 'styled-components'

export const StyledWrapper = styled.div`
    background-color: #F4F4F4;
    *{
        box-sizing: border-box;
        position: relative;
    }
    html,body{
        font-family: '微軟正黑體', 'Comic Sans MS';
    }
    h1,h2,h3,h4,h5,h6{
        margin: 0;
    }
    ul, li{
        margin: 0;
        padding: 0;
        list-style: none;
    }
    a{
        text-decoration: none;
        color: #333;
    }
`

export const StyledLogoBar = styled.div`
    width: 20%;
    height: 100%;
    display: inline-block;
    position: fixed;
    top: 0;
    left: 0;
    background-color: white;
    z-index: 2;
    text-align: center; 
    img {
        width: 80%;
        padding: 10px;
    }
    .logo_title {
        font-size: 22px;
    }

    @media screen and ( max-width: 700px ) {
        width: 100%;
        height: 200px;
        text-align: center; 
        img {
            width: 150px;
        }
        .logo_title {
            font-size: 18px;
        }
    }

`

export const StyledGraph = styled.div`
    padding: 200px 100px 50px 22%;
    height: 100%;
    display: flex;
    text-align: center;
    .region_title {
        font-size: 22px;
        padding: 5px;
    }
    select {
        width: 50%;
        font-size: 22px;
        padding-left: 10px;
        margin-left: 10px;
    }

    @media screen and ( max-width: 700px ) {
        padding: 225px 0 0 0 ;
        display: block;
        text-align: center;
        select {
            margin: 5px;
            font-size: 18px;
            width: 55%;
        }
    }
`

export const StyledBar = styled.div`
    padding-left: 22%;
    @media screen and ( max-width: 700px ) {
        padding-left: 0;
    }
`


