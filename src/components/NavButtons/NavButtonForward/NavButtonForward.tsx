import { useAppDispatch } from 'hooks/redux'
import React from 'react'
import { stepForward } from 'redux/reducers/stepperSlice'
import styles from './NavButtonForward.module.scss'

export const NavButtonForward = () => {
  const { buttonNext } = styles
  const dispatch = useAppDispatch()
  const nextStep = () => {
    dispatch(stepForward())
  }
  return (
    <button
      id="button-next"
      type="submit"
      className={buttonNext}
      onClick={nextStep}
    >
      Далее
    </button>
  )
}
