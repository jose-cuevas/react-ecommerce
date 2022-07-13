import React from 'react'

function FetchDataApi() {
    const [items, setItems] = useState([])

    const url = 'http://localhost:7000/products'
    const getItems = async() =>{
      const response = await fetch(url)
      console.log(response)
      const items = response.json()
      console.log(items) 
      setItems(items)
    }
    
    useEffect(()=>{
      getItems()
    },[])


  return (
    <div>FetchDataApi</div>
  )
}

export default FetchDataApi