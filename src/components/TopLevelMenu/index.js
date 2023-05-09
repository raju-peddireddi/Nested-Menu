import {useState} from 'react'
import {makeStyles } from "@mui/styles";
import { Button } from '@mui/material';
import NestedMenuItem from "material-ui-nested-menu-item";
import Checkbox from '@mui/material/Checkbox';
import { MenuItem } from '@mui/material';
import Menu from "@mui/material/Menu";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './index.css'

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
    justifyContent: 'space-between !important',
    paddingLeft: "0px !important"
  },
  subMenuItem:{
    minWidth: '180px',
    display:'flex',
    justifyContent: 'space-between !important'
  }
}))

const TopLevelMenu = (props) => {
  const {listOfMenuItems} = props
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (e) => {
  setAnchorEl(e.currentTarget);
  }

  const handleClose = () => setAnchorEl(null);

    
return (
  <div className={classes.container}>
    <Button
      variant="contained"
      onClick={handleClick}
  
    >
      Nested Menu!
    </Button>
    <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {listOfMenuItems.map(eachItem => {
          if (eachItem.subFilterValues !== undefined){
            return(
             <div className={classes.menuItemContainer}>
              <Checkbox size='small'/>
              <NestedMenuItem className={classes.mainMenuItem}
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
            <MenuItem onClick={handleClose}>{each.label}</MenuItem>
          </NestedMenuItem>)
        }
        else{
         return(<MenuItem onClick={handleClose}>{each.label}</MenuItem>)

        }})}
        
      </NestedMenuItem>
      </div>
            )

          }
        else{
          return(<div className={classes.menuItemContainer}>
            <Checkbox size='small'/>
          <MenuItem onClick={handleClose} className={classes.mainMenuItem}>{eachItem.label}</MenuItem>
          </div>)
        }
      }
    )}
    </Menu>
  </div>

);
  
}
  
export default TopLevelMenu