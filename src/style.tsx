import styled from 'styled-components';

export const FeedContainer = styled.div`
  height: 800px;
  width: 600px;
  background-color: grey;
  margin: 100px auto;
  overflow: scroll;
  border: solid 5px darkgrey;
  border-radius: 5px;
`

export const NewsItemContainer = styled.div`
  width: 500px;
  height: 200px;
  margin: 20px auto;
  background-color: white;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  justify-items: center;
`

export const NewsValContainer = styled.div`
  text-align: center;
  font-size: 5rem;
  color: darkblue;
  margin: auto;
  font-family: monospace;
`