import {useState} from 'react'
import {makeStyles } from "@mui/styles";
import { Button } from '@mui/material';
import NestedMenuItem from "material-ui-nested-menu-item";
import Checkbox from '@mui/material/Checkbox';
import { MenuItem } from '@mui/material';
import Menu from "@mui/material/Menu";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const useStyles = makeStyles(() => ({
  container:{
    marginTop: 50
  },
  menuItemContainer:{
    display: 'flex',

  },
  mainMenuItem:{
    minWidth: '180px',
    display: 'flex',
    justifyContent: 'space-between !important'

  },
  mainMenuItemForCheckboxTrue:{
    display: 'flex',
    justifyContent: 'space-between !important'

  },
  forCheckboxTrue:{
      paddingLeft: "0px !important"
  },
  subMenuItem:{
    minWidth: '180px',
    display:'flex',
    justifyContent: 'space-between !important'
  }
}))

const TopLevelMenu = (props) => {
  const {listOfMenuItems, selectedValue, checkbox, minWidth, text='Static Menu'} = props
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null);
  const [value, setMenuValue] = useState('')
  const open = Boolean(anchorEl);
  const handleClick = (e) => {
  setAnchorEl(e.currentTarget);
  }

  const handleClose = () => setAnchorEl(null);

  const handleMenuItemClick = (item) => {
    setAnchorEl(null)
    setMenuValue(item)
    selectedValue(item)
  }
    
return (
  <div className={classes.container}>
    <Button
      variant="contained"
      onClick={handleClick}
  
    >
      {text}
    </Button>
    <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {listOfMenuItems.map(eachItem => {
          if (eachItem.subFilterValues !== undefined){
            return(
             <div className={classes.menuItemContainer}>
              {checkbox && <Checkbox size='small'/>}
              <NestedMenuItem className={`${classes.mainMenuItem} ${checkbox ? classes.forCheckboxTrue : ''}`}
              style={{minWidth: minWidth}}
        label={eachItem.label}
        parentMenuOpen={open}
        rightIcon={<ArrowForwardIosIcon fontSize= 'small' style={{height: 14}}/>}
      >
        {eachItem.subFilterValues.map(each => {
        if (each.subChildFilterValues !== undefined){
          return(<NestedMenuItem
            label={each.label}
            parentMenuOpen={open}
            rightIcon={<ArrowForwardIosIcon fontSize= 'small' style={{height: 13}}/>}
            className={classes.subMenuItem}
          >
            <MenuItem onClick={()=> handleMenuItemClick(each.value)} key = {each.value}>{each.label}</MenuItem>
          </NestedMenuItem>)
        }
        else{
         return(<MenuItem  style={{minWidth: minWidth }} onClick={() => handleMenuItemClick(each.value)} sx={{width: '100%'}} key = {each.value}>{each.label}</MenuItem>)

        }})}
        
      </NestedMenuItem>
      </div>
            )

          }
        else{
          return(<div className={classes.menuItemContainer} key={eachItem.value}>
            {checkbox && <Checkbox size='small'/>}
          <MenuItem onClick={() => handleMenuItemClick(eachItem.value)} className={`${classes.mainMenuItem} ${checkbox ? classes.forCheckboxTrue : ''}`}  >{eachItem.label}</MenuItem>
          </div>)
        }
      }
    )}
    </Menu>
  </div>

);
  
}
  
export default TopLevelMenu