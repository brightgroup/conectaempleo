import { useState } from 'react'

const useForm = action => {
  const [data, setData] = useState({})
  const [validate, setValidate] = useState(false)
  const [activatedSelect, setActivatedSelect] = useState('')

  const handleChange = ({ target }) => setData({ ...data, [target.name]: target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    setValidate(true)
    if (action(data)) return
    setValidate(false)
    setActivatedSelect('')
  }

  return {
    validate,
    activatedSelect,
    setActivatedSelect,
    handleSubmit,
    handleChange,
    data,
    setData,
  }
}

export default useForm
