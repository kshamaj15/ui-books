import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import Cart from '../../Components/Cart/cart';

const Sidebar = (props) => {
    return (
        <div className="p-3">
            <Cart ></Cart>
            <FormControl variant="outlined">
                <InputLabel htmlFor="outlined-age-native-simple">Sort By</InputLabel>
                <Select native
        //   value={state.age}
          onChange={props.sortHandler}
          label="Sort By"
          inputProps={{
            name: 'age',
            id: 'outlined-age-native-simple',
          }}
        >
            <option value={""}></option>
          <option value={'ratings'}>Ratings</option>
          <option value={'price'}>Price</option>
        </Select>
      </FormControl>
            
        </div>
    )
}

export default Sidebar;
