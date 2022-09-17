import * as React from 'react'
import { useAppSelector } from '../store/store'

const Home = () => {
  const isLoggedIn = useAppSelector((state) => state.user.isLoggedIn)
  const userInfo = useAppSelector((state) => state.user.userInfo)

  return (
    <div>
      <h1>Home</h1>
      {isLoggedIn ? (
        <h2>
          Hello, {userInfo?.firstName} {userInfo?.lastName}
        </h2>
      ) : (
        <h2>Hello, please log in to see full message.</h2>
      )}
    </div>
  )
}

export default Home
