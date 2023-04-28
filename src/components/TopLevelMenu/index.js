import {useState} from 'react'
import {makeStyles } from "@material-ui/core/styles";
import { Button } from '@mui/material';
import NestedMenuItem from "material-ui-nested-menu-item";
import {Checkbox, MenuItem} from "@material-ui/core";
import Menu from "@mui/material/Menu";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import './index.css'

const useStyles = makeStyles(() => ({
  
  iosRightIconSubMenu1:{
    fontSize:"small",
    position:"fixed",
    marginTop:"0.2rem",
    marginLeft:"12.95rem",
  },
  iosRightIconSubMenu2:{
    fontSize:"small",
    position:"fixed",
    marginTop:"0.2rem",
    marginLeft:"10.9rem",
  },
  menuPaper1:{
    minHeight: "44px",
    "&.MuiMenuItem-root:hover":{
      backgroundColor: "#DBECF8",
    },

  },
  subMenuPaper1:{
    minHeight: "44px",
    width:"251px",
    "&.MuiMenuItem-root:hover":{
      backgroundColor: "#DBECF8",
    },
  },
  subMenuPaper2:{
    minHeight: "44px",
    width:"217px",
    "&.MuiMenuItem-root:hover":{
      backgroundColor: "#DBECF8",
    },
  },
  subMenuPaper3:{
    minHeight: "44px",
    width:"190px",
    "&.MuiMenuItem-root:hover":{
      backgroundColor: "#DBECF8",
    },
  },
  iosRightIcon:{
    fontSize:"small",
    position:"relative",
    marginLeft: '10px'
  }
}))

const TopLevelMenu = (props) => {
  const {data} = props
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (e) => {
  setAnchorEl(e.currentTarget);
  }

  const handleClose = () => setAnchorEl(null);

    
return (
  <div>
    <Button
      variant="contained"
      onClick={handleClick}
  
    >
      Click Me!
    </Button>
    <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
      {data.map(eachItem => {
      if (eachItem.versions.length !== 0){
      return(
      <NestedMenuItem
       leftIcon={<Checkbox/>}
        label= {eachItem.course}
        parentMenuOpen={open}
       className={classes.menuPaper1}
       rightIcon={<ArrowForwardIosIcon className={classes.iosRightIcon}/>}
      >
        {eachItem.versions.map(each => {
        return <MenuItem onClick={handleClose} className={classes.menuPaper1}>{each}</MenuItem>}
        )}
    
      </NestedMenuItem>
    )}
      else{
        return (<MenuItem className={classes.menuPaper1}>{eachItem.course}</MenuItem>)
      }
    })}
    </Menu>
  </div>

);
  
}
  
export default TopLevelMenu