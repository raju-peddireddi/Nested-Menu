import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import { makeStyles } from '@material-ui/core/styles';
import ArrowRightSharpIcon from '@mui/icons-material/ArrowRightSharp';
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

const SubMenu = (props) => {
  const classes = useStyles()
    const {eachItem} = props
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="sub-container" >
         <Checkbox />
      <Button
        className={`course-button ${classes.menuItem}`}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
       
        sx={{fontSize: '20px', color: 'black', display:'flex', justifyContent: 'space-between' }}
        // className="course-button"
      >
   {eachItem.course}{eachItem.versions.length !== 0 &&  <ArrowRightSharpIcon sx = {{fontWeight:'normal', color: 'grey', align: 'right'}}/>}
      </Button>
      {eachItem.versions.length !== 0 && <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button"
        }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left"
        }}
        sx={{ml: '30px'}}
      >
        {eachItem.versions.map(eachVersion => <MenuItem onClick={handleClose} sx={{fontSize:'20px', minWidth: '100px' }} className={classes.nestedMenuItem}>{eachVersion}</MenuItem>)}
    
      </Menu>}
    </div>
  );
}
export default SubMenu