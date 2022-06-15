import { useState } from 'react'

const useModal = initialState => {
  const [modals, setModals] = useState(initialState)

  const toggleModal = modalActive => {
    const hiddenModals = {}
    for (const modal in modals) {
      hiddenModals[modal] = false
    }
    setModals({ ...hiddenModals, [modalActive]: !modals[modalActive] })
  }
  return { toggleModal, modals }
}

export default useModal
