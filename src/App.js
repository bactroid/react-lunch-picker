import React, { useEffect, useState } from 'react'
import {get} from 'axios'
import './App.css'
import RestaurantDisplay from './components/RestaurantDisplay'

const LUNCH_PICKER_URL = 'https://6zkojio7gj.execute-api.us-east-1.amazonaws.com/dev/lunch'

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [restaurant, setRestaurant] = useState('butts')

  useEffect(() => {
    get(LUNCH_PICKER_URL).then(response => {
      setRestaurant(response.data.text)
      setIsLoading(false)
    })
  }, [])



  return (
    <div className='App'>
      <RestaurantDisplay
        restaurant={isLoading ? 'Loading...' : restaurant}
      />
    </div>
  )
}

export default App
