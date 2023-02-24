import styled from 'styled-components'

export const TagList = styled.li`
  width: 60vw;
  height: 50px;
  //   background-color: #323f4b;
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`

export const TagTitleBtn = styled.button`
  font-size: 15px;
  border: ${props => (props.activeTagStyle ? '0px' : '1px solid white')};
  border-radius: 25px;
  margin: 20px;
  padding: 10px;
  background-color: ${props =>
    props.activeTagStyle ? '#f3aa4e' : 'transparent'};
  color: white;
`
