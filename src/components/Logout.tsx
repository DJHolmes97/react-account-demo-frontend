import * as React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { logoutUser } from '../reducers/userReducer'
import { useAppDispatch, useAppSelector } from '../store/store'

export const Logout = () => {
  const dispatch = useAppDispatch()
  const error = useAppSelector((state) => state.user.error)
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(logoutUser())
    return navigate('/login')
  })

  return <></>
}
