import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import TagItem from '../TagItem'
import TaskItem from '../TaskItem'
import {
  AppContainer,
  Heading,
  EmptyText,
  InputCon,
  TextCon,
  TagCon,
  TaskCon,
  InputForm,
  Label,
  Task,
  TagDropdown,
  Button,
} from './styledComponents'

// Sai Tej's Code

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
    toggle: false,
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
    toggle: false,
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
    toggle: false,
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
    toggle: false,
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
    toggle: false,
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
    toggle: false,
  },
]

const TaskManager = () => {
  const [taskName, setTask] = useState('')
  const [tagName, setTag] = useState('Health')
  const [activeTag, setActiveTag] = useState(false)
  const [inActiveTag, setTagInActive] = useState(tagsList)
  const [tasksList, setTasksList] = useState([])
  const [filteredTasksList, setFilteredTasks] = useState([])

  const onChangeInput = event => {
    setTask(event.target.value)
  }

  const onChangeSelect = event => {
    setTag(event.target.value)
  }

  const onSubmitTask = event => {
    event.preventDefault()
    const newTask = {
      id: uuidv4(),
      taskName,
      tagName,
    }
    setTasksList(prevList => [...prevList, newTask])

    setTask('')
    setTag(tagsList[0].displayText)
  }
  // console.log(tasksList)

  const onToggleTagName = (displayText, toggle) => {
    // setTagInActive(toggle => !toggle)
    setActiveTag(displayText)
    const filteredTasks = tasksList.filter(
      eachTask => displayText === eachTask.tagName,
    )

    const newTagList = inActiveTag.map(eachTag => {
      if (displayText === eachTag.displayText) {
        return {...eachTag, toggle: !eachTag.toggle}
      }
      return eachTag
    })
    setTagInActive(newTagList)
    // console.log(filteredTasks)
    // console.log(newTagList)
    setFilteredTasks(filteredTasks)
  }

  // console.log(inActiveTag)

  // console.log(activeTag)

  console.log(inActiveTag)

  const everyTag = inActiveTag.every(each => each.toggle === false)

  console.log(everyTag)

  const renderAllTasksView = () =>
    tasksList.map(eachTask => (
      <TaskItem taskItem={eachTask} key={eachTask.id} />
    ))

  const renderFilteredTasksView = () =>
    filteredTasksList.map(eachTask => (
      <TaskItem taskItem={eachTask} key={eachTask.id} />
    ))

  const renderEmptyView = () => <EmptyText>No Tasks Added Yet</EmptyText>

  return (
    <AppContainer>
      <InputCon>
        <Heading>Create a Task!</Heading>
        <InputForm onSubmit={onSubmitTask}>
          <Label htmlFor="Task">Task</Label>
          <Task
            onChange={onChangeInput}
            placeholder="Enter the task here"
            value={taskName}
            id="Task"
            type="text"
          />

          <Label htmlFor="DropDown">Tags</Label>
          <TagDropdown value={tagName} onChange={onChangeSelect} id="DropDown">
            <option value={tagsList[0].optionId}>
              {tagsList[0].displayText}
            </option>
            <option value={tagsList[1].optionId}>
              {tagsList[1].displayText}
            </option>
            <option value={tagsList[2].optionId}>
              {tagsList[2].displayText}
            </option>
            <option value={tagsList[3].optionId}>
              {tagsList[3].displayText}
            </option>
            <option value={tagsList[4].optionId}>
              {tagsList[4].displayText}
            </option>
            <option value={tagsList[5].optionId}>
              {tagsList[5].displayText}
            </option>
          </TagDropdown>
          <Button type="submit">Add Tasks</Button>
        </InputForm>
      </InputCon>

      <TextCon>
        <Heading>Tags</Heading>
        <TagCon>
          {inActiveTag.map(eachItem => (
            <TagItem
              tagName={eachItem}
              key={eachItem.optionId}
              onToggleTagName={onToggleTagName}
              isActive={activeTag === eachItem.displayText}
              isToggle={eachItem.toggle === true}
            />
          ))}
        </TagCon>
        <TaskCon>
          <Heading>Tasks</Heading>
          {tasksList.length === 0 && renderEmptyView()}
          {everyTag ? renderAllTasksView() : renderFilteredTasksView()}
        </TaskCon>
      </TextCon>
    </AppContainer>
  )
}

export default TaskManager
