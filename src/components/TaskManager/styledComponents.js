import styled from 'styled-components'

export const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #131213;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const InputCon = styled(AppContainer)`
  width: 30vw;
  height: 100vh;
  background-color: #323f4b;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Heading = styled.h1`
  color: #f3aa4e;
  font-size: 35px;
  align-self: center;
`

export const EmptyText = styled.p`
  color: white;
  font-size: 25px;
  align-self: center;
`

export const TextCon = styled(AppContainer)`
  width: 70vw;
  height: 100vh;
  background-color: #131213;
  color: white;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`
export const TagCon = styled.ul`
  width: 70vw;
  height: 10vh;
  background-color: #131213;
  color: white;
  display: flex;
`
export const TaskCon = styled.ul`
  width: 70vw;
  height: 80vh;
  //   background-color: lightgrey;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`

export const InputForm = styled.form`
  width: 22vw;
  height: 40vh;
  //   background-color: lightblue;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-direction: column;
  border-radius: 10px;
  margin-top: 30px;
`
export const Task = styled.input`
  width: 22vw;
  height: 40px;
  border-radius: 5px;
  background-color: white;
  border: 0px;
  font-size: 16px;
  outline: none;
  padding-left: 10px;
`
export const TagDropdown = styled.select`
  width: 22vw;
  height: 40px;
  border-radius: 5px;
  background-color: white;
  border: 0px;
  font-size: 16px;
  outline: none;
  padding-left: 10px;
`
export const Label = styled.label`
  font-size: 15px;
  font-family: roboto;
  color: white;
  margin-bottom: -15px;
`
export const Button = styled.button`
  width: 8vw;
  height: 40px;
  background-color: #f3aa4e;
  border: 0px;
  margin-top: 10px;
  border-radius: 6px;
  align-self: center;
  margin-right: 20px;
  color: white;
`
