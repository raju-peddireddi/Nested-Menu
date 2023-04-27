
import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { makeStyles } from '@material-ui/core/styles';
import SubMenu from "../SubMenu";
import './index.css'

const useStyles = makeStyles((theme) => ({
  nestedMenuItem: {
    paddingLeft: theme.spacing(4),
  },
  menuItem: {
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}));


const TopLevelMenu = (props) => {
  const classes = useStyles()
  const {data} = props
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [nestedAnchorEl, setNestedAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNestedMenuEnter = (event) => {
    setNestedAnchorEl(event.currentTarget);
  };


  return (
    <div className="main-container">
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{fontWeight:'bold', fontSize:'30px'}}
      >
       MENU ITEMS
       <span>Rajuuuuuuuuu</span>
      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button"
        }}
        sx={{maxHeight: '500px'}}
       
      >
        {data.map(eachItem => <MenuItem   className={classes.menuItem}  onMouseEnter={handleNestedMenuEnter}
          ><SubMenu sx={{minWidth: '250px'}}eachItem = {eachItem}/></MenuItem>)}
      </Menu>

    </div>
  );
}
export default TopLevelMenu