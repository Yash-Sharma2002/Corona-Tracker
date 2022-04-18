import { Chart } from "react-google-charts";
import React from 'react'
import { Box, Typography } from '@mui/material'
import { ApiContext } from "../context/Context";

export default function Tested() {
  const dataApi = [["Date", "Total Number of samples on that day"]];
  const forDisplay = [];
  const { apiData } = React.useContext(ApiContext)

  apiData.tested.map((data) => {
    dataApi.push([data.testedasof, parseInt(data.samplereportedtoday)])
    forDisplay.push([data.testedasof, data.samplereportedtoday])
    }
  )
  return (
    <>
      <Typography variant="h4" sx={{ textAlign: "center", mt: 5 }}>Graph</Typography>
      <Typography sx={{ textAlign: "center", mt: 5, fontSize: '20px' }}>This page stats that how much tests are conducted per day when corona started</Typography>
      <Chart
        chartType="LineChart"
        data={dataApi}
        width="100%"
        height="700px"
      />
      <Typography variant="h4" sx={{ textAlign: "center", mt: 5 }}>Data</Typography>
      <Box style={{ border: '1px solid black', borderRadius: '1rem', width: '80%', margin: '0px auto', overflowY: 'auto', padding: '10px', height: '600px' }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: 'center', my: 1 }}>
          <Typography sx={{ fontSize: '20px' }}>Date</Typography>
          <Typography sx={{ fontSize: '20px' }}>Number of Tests</Typography>
        </Box>
        {forDisplay.reverse().map((datas, index) => {
          if (datas[1] === '') datas[1] = 'Data not available'
          return (
            <Box
              key={index}
              sx={{ display: "flex", justifyContent: "space-between", alignItems: 'center', my: 1 }}
            >
              <Typography>{datas[0]}</Typography>
              <Typography>{datas[1]}</Typography>
            </Box>
          )
        })}
      </Box>
    </>
  )
}
