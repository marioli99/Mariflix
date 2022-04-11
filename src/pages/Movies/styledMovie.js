import styled from 'styled-components';

export const Container = styled.div`
h1{
    text-align:center;
    margin: 4rem 0;
}

ul{
    list-style:none;
    display:grid;
    grid-template-columns:repeat(auto-fit, minmax(200px, 1fr) );
    column-gap: 3rem;
    row-gap:4rem;
}

li{
    display:flex;
    flex-direction:column;
    align-items:center;

}

img{
    width:180px;
    border-radius:1rem;
}

`;