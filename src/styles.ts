import styled, { createGlobalStyle } from 'styled-components'

export const Cores = {
  corPrincipal: '#a7727d',
  corSecundaria: '#f9f5e7',
  CorTextoHero: '#ccc'
}

export const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
  }
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 768px) {
    max-width: 80%;
  }
`
