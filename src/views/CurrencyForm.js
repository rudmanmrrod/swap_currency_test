import { useState } from 'react';
import Currency from "../component/Currency";
import {
  Paper,
  Box,
  IconButton
} from '@mui/material';
import { SwapHoriz } from '@mui/icons-material';
import { swapValues } from '../constants'

const CurrencyForm = (props) => {
  const [ currency1, setCurrency1 ] = useState({label: 'USD', value: 1})
  const [ currency2, setCurrency2 ] = useState({label: 'Euro', value: 0.96501})
  const { currencyList } = props;

  const swapMoneyValue = (value, type) => {
    if (type === 1) {
      setCurrency1({label: value.label, value: 1})
      setCurrency2({...currency2, value: swapValues[value.label+currency2.label]})
    } else {
      setCurrency2({label: value.label, value: swapValues[currency1.label+value.label]*currency1.value})
    }
  };

  const swapCurrencyValues = () => {
    const aux_currency = currency1
    setCurrency1(currency2)
    setCurrency2(aux_currency)
  };

  return (
    <Paper sx={{ padding: 5 }}>
      <Box sx={{ display: 'flex' }}>
        <Currency 
          money_list={currencyList} 
          onSelectChange={(newValue) => {swapMoneyValue(newValue, 1)}} 
          currencySelected={currency1.label} 
          value={currency1.value}
          onChange={(e) => {
            setCurrency1({...currency1, value: e.target.value})
            setCurrency2({...currency2, value: parseFloat(parseFloat(swapValues[currency1.label+currency2.label] * e.target.value).toFixed(4))})
          }}  
        />
        <IconButton aria-label="swap" onClick={() => swapCurrencyValues()}>
          <SwapHoriz />
        </IconButton>
        <Currency 
          money_list={currencyList}
          onSelectChange={(newValue) => {swapMoneyValue(newValue, 2)}}
          currencySelected={currency2.label}
          value={currency2.value}
          onChange={(e) => {
            setCurrency2({...currency2, value: e.target.value})
            setCurrency1({...currency1, value: parseFloat(parseFloat(swapValues[currency2.label+currency1.label] * e.target.value).toFixed(4))})
          }} 
        />
      </Box>
    </Paper>
  )
}

export default CurrencyForm;