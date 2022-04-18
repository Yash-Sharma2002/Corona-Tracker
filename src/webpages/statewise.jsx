import React from 'react'
import { Box, Typography } from '@mui/material'
import { ApiContext } from "../context/Context";

export default function Statewise() {
  const { apiData } = React.useContext(ApiContext)
  return (
    <>
      <Typography variant="h4" sx={{ textAlign: "center", mt: 5 }}>Statewise</Typography>
      <Typography sx={{ textAlign: "center", mt: 5, fontSize: '20px', width: '70%', margin: "20px auto" }}>
        This page can only provides the table form of all the data because we have been provided with one data per state.
        It does not contain data by timeline for each state.
        Currently in this version this is how we show this data but it can be changed after upcoming versions
      </Typography>
      <Box style={{ border: '1px solid black', borderRadius: '1rem', width: '80%', margin: '0px auto', overflowY: 'auto', padding: '10px', height: '600px' }}>
        {apiData.statewise.reverse().map((datas, index) => {
          return (
            <>
            <Typography sx={{ mt: 5, fontSize: '25px', fontWeight: '800', textTransform: 'capitalize' }}>{datas.state}</Typography>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: 'center', my: 1, }} >
                <Typography>Active Cases</Typography>
                <Typography>{datas.active}</Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: 'center', my: 1 }} >
                <Typography>Recovered</Typography>
                <Typography>{datas.recovered}</Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: 'center', my: 1, }} >
                <Typography>Deaths</Typography>
                <Typography>{datas.deaths}</Typography>
              </Box>

              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: 'center', my: 1, }} >
                <Typography>Confirmed Cases</Typography>
                <Typography>{datas.confirmed}</Typography>
              </Box>

              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: 'center', my: 1 }} >
                <Typography>People Migrated</Typography>
                <Typography>{datas.migratedother}</Typography>
              </Box>

              <Typography sx={{ fontSize:'20px', my: 3 }}>Delta Virus Updated</Typography>

              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: 'center', my: 1, }} >
                <Typography>Active Cases</Typography>
                <Typography>{datas.deltaconfirmed}</Typography>
              </Box>

              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: 'center', my: 1 }} >
                <Typography>Recovered</Typography>
                <Typography>{datas.deltaconfirmed}</Typography>
              </Box>

              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: 'center', my: 1, }} >
                <Typography>Deaths</Typography>
                <Typography>{datas.deltadeaths}</Typography>
              </Box>

              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: 'center', my: 1 }} >
                <Typography sx={{ fontSize: '20px' }}>Last Updated On</Typography>
                <Typography sx={{ fontSize: '20px' }}>{datas.lastupdatedtime}</Typography>
              </Box>


            </>
          )
        })}
      </Box>
    </>
  )
}
