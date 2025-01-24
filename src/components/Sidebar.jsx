import { Collapse, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { Delete, DeleteForever, Mail } from '@mui/icons-material'
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';


const CollapseListItem = ({ links }) => {
      const [isOpen, setIsopen] = useState(false);
      const Nevigate = useNavigate();

      return (
            <>
                  <ListItem disablePadding divider>
                        <ListItemButton onClick={() => links.children ? setIsopen(!isOpen) : Nevigate(links.path)}>
                              <ListItemIcon>
                                    {links.icon}
                              </ListItemIcon>
                              <ListItemText primary={links.label} />
                              {links.children && (isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />)}
                        </ListItemButton>
                  </ListItem>
                  {
                        links.children && (
                              <Collapse in={isOpen}>
                                    <List>
                                          {links.children.map((child, index) => (
                                                <ListItem disablePadding divider key={index}>
                                                      <ListItemButton onClick={() => Nevigate(child.path)}>
                                                            <ListItemIcon sx={{ ml: 2 }}>
                                                                  {child.icon}
                                                            </ListItemIcon>
                                                            <ListItemText primary={child.label} />
                                                      </ListItemButton>
                                                </ListItem>
                                          ))}
                                    </List>
                              </Collapse>
                        )
                  }

            </>
      )
}


const Navlinks = [
      {
            label: 'Dashboard',
            icon: <Mail />,
            path: '/dashboard'
      },
      {
            label: 'All Pages',
            icon: <DeleteForever />,

            children: [
                  {
                        label: 'Student',
                        icon: <DeleteForever />,
                        path: '/student',
                  }
            ]
      },
]



const Sidebar = () => {
      return (
            <List>
                  {
                        Navlinks.map((link, index) => (
                              <CollapseListItem key={index} links={link} />
                        ))
                  }

            </List>
      )
}

export default Sidebar
