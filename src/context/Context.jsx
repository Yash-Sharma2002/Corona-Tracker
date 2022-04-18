import React from 'react'
import axios from "axios";

export const ApiContext = React.createContext(null)

export default function ContextProvider({ children }) {
  const [apiData, setApiData] = React.useState({
    cases_time_series: [],
    statewise: [],
    tested: []
  })

  async function handleData() {
    try {
      const response = await axios.get(
        "https://data.covid19india.org/data.json"
      );
      setApiData(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  React.useEffect(() => {
    handleData()
  }, [])
  return (
    <ApiContext.Provider value={{
      apiData
    }}>
      {children}
    </ApiContext.Provider >
  )
}
