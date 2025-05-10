import React, {useContext} from 'react'
import { counterContext } from '../context/Context'

const Components1 = () => {
    const value = useContext(counterContext)
  return (
    <div>
        {value.count}
    </div>
  )
}

export default Components1