/* eslint-disable react/prop-types */
import Note from './Note'

function NoteContainer(props) {

  function revArr(arr)
  {
    const array = []
    for(let i = arr.length-1; i >= 0; --i)
    {
      array.push(arr[i])
    }
    return array
  }

  const notes = revArr(props.notes)

  return (
    <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-[80%] w-[80%] z-[5] flex overflow-x-hidden'>
        <div className='flex justify-center gap-4 flex-wrap'>

        {
          notes.map((item) => <Note key={item.id} note={item} deleteNote={props.deleteNote} updateTextArea={props.updateTextArea} updateTextTitle={props.updateTextTitle} />)
        }        
       </div>
    </div>
  )
}

export default NoteContainer;