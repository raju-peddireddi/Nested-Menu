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
  const [nestedAnchorEl, setNestedAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  const handleClose = () => { 
    setAnchorEl(null);
    setNestedAnchorEl(null)
  };


  const handleNestedMenuEnter = (event) => {
    setNestedAnchorEl(event.currentTarget);
  };

  const handleNestedMenuLeave = () => {
    setNestedAnchorEl(null);
  };

  const handleMenuClose = () => {
    setNestedAnchorEl(null);
    
  };


  return (
    <div className="sub-container" >
         <Checkbox fontSize='small'/>
      <Button
        className={`course-button ${classes.menuItem}`}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        // onClick={handleClick}

        onMouseEnter={handleNestedMenuEnter}

        sx={{fontSize: '16px', color: 'black', display:'flex', justifyContent: 'space-between' }}
        // className="course-button"
      >
   {eachItem.course}{eachItem.versions.length !== 0 &&  <ArrowRightSharpIcon sx = {{fontWeight:'normal', color: 'grey', align: 'right'}}/>}
      </Button>
      {eachItem.versions.length !== 0 && <Menu
        id="basic-menu"
        // anchorEl={anchorEl}
        anchorEl={nestedAnchorEl}
        open={Boolean(nestedAnchorEl)}
        // open={open}
  
        onMouseLeave={handleNestedMenuLeave}
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
        {eachItem.versions.map(eachVersion => <MenuItem   sx={{fontSize:'16px', minWidth: '100px' }} className={classes.nestedMenuItem} onMouseLeave={handleMenuClose}>{eachVersion}</MenuItem>)}
    
      </Menu>}
    </div>
  );
}
export default SubMenu