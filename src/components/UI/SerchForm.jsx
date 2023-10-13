import React from 'react'

export default function SerchForm() {
  const [input, setInput] = React.useState('');
  const changeHandler = (e) => {
    setInput(e.target.value)
  }
  useEffect (() => {
    if (input.trim()) {
      const time = setTimeout(() => {
        axios.post('/api/routes/search', {input})
        .then((res) =>  )
      }, 300)
    }
  })
  return (
    <Form.Control value="" onChange={() => {}} name="name" type="text" placeholder="filter" style={{ width: '275px' }} />
  )
}
