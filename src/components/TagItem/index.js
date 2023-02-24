import {TagList, TagTitleBtn} from './styledComponents'

// Sai Tej's Code

const TagItem = props => {
  const {tagName, onToggleTagName, isActive, isToggle} = props
  const {displayText, toggle} = tagName

  const onClickTag = () => {
    onToggleTagName(displayText, toggle)
  }

  //   const activeTagStyle = isActive ? 'highLight' : null

  console.log(isActive, isToggle)

  return (
    <TagList>
      {isActive && isToggle ? (
        <TagTitleBtn activeTagStyle onClick={onClickTag}>
          {displayText}
        </TagTitleBtn>
      ) : (
        <TagTitleBtn onClick={onClickTag}>{displayText}</TagTitleBtn>
      )}
    </TagList>
  )
}

export default TagItem
