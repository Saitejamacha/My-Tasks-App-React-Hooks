import {TaskList, TaskText, TagName} from './styledComponents'

// Sai Tej's Code

const TaskItem = props => {
  const {taskItem} = props
  const {id, taskName, tagName} = taskItem

  return (
    <TaskList>
      <TaskText>{taskName}</TaskText>
      <TagName>{tagName}</TagName>
    </TaskList>
  )
}

export default TaskItem
