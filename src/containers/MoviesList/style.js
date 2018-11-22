import styled from 'styled-components';

export const ListContainer = styled.div`

`

export const ListBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    @media (min-width: 1024px) {
        flex-direction: row;
        flex-wrap: wrap;
    }
`