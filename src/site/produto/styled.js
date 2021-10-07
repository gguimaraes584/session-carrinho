import styled from "styled-components";

const Container = styled.div`
display: flex;
flex-direction: column;

padding: 1.5em;
margin: 1em;
box-shadow: 0em 0em 0.3em 1px #d5d4d6;
align-items: center;

.capa {
    width: 5em;
    height: 7em;
}

.titulo {
    text-align: center;
    font: 700 1.5 "Roboto";
    color: #000000;
}

.preco {
    font: 400 1.5 "Roboto";
    color: #000000;
}

button {
    border-radius: 2em;
    outline: none;
    padding: 0.5em 1.5em;

    font: 400 1m Roboto;
    background-color: #f837b2;
    color: #ffffff;
    cursor: pointer;
}
`

export {Container}