import {
  Autocomplete,
  TextField,
  Grid
} from '@mui/material';

const Currency = (props) => {
  const { money_list, value, onChange, onSelectChange, currencySelected } = props
  return (
    <Grid container >
      <Grid item md={12} sx={{ display:'flex', justifyContent: 'center', mb: 4 }}>
        <Autocomplete
          disablePortal
          id="currency"
          options={money_list}
          value={currencySelected}
          onChange={(event, newValue) => onSelectChange(newValue)}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Currency" />}
        />
      </Grid>
      <Grid item md={12} sx={{ display:'flex', justifyContent: 'center' }}>
        <TextField id="currency_field" variant="filled" value={value} onChange={onChange} />
      </Grid>
    </Grid>
  )
};

export default Currency;