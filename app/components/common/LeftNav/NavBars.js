import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';

import map from 'lodash/map'

const useStyles = makeStyles((theme) => ({
  root: {
    height: 240,
    flexGrow: 1,
    maxWidth: 400,
  },
  treeItem: {
    '&:focus > $content $label, &:hover > $content $label, &$selected > $content $label': {
      backgroundColor: 'transparent',
    },
  },
  selected: {
    // backgroundColor: 'transparent'
    '& $content': {
      fontSize: '3rem'
    },
  }
}));

const data = [
  {
    id: 'forher',
    name: '女士',
    children: [
      {
        id: 'forher_1',
        name: '新品系列',
      },
      {
        id: 'forher_2',
        name: '手鏈',
      },
      {
        id: 'forher_3',
        name: '項鏈',
      },
      {
        id: 'forher_4',
        name: '戒指',
      },
    ],
  },
  {
    id: 'forHim',
    name: '男士',
    children: [
      {
        id: 'forhim_1',
        name: '新品系列',
      },
      {
        id: 'forhim_2',
        name: '手鏈',
      },
      {
        id: 'forhim_3',
        name: '項鏈',
      },
      {
        id: 'forhim_4',
        name: '戒指',
      },
    ],
  },
  {
    id: 'forYou',
    name: '度身訂造',
  },
  {
    id: 'seasonal',
    name: '季節限定',
  },
]

export default function FileSystemNavigator() {
  const classes = useStyles();
  return (
    <TreeView
      className={classes.root}
      multiSelect={false}
    >
      {
        map(data, root => {
          return (
            <TreeItem classes={{ root: classes.treeItem, selected: classes.selected }} nodeId={root.id} label={root.name}>
              {
                root.children && map(root.children, children => {
                  return (
                    <TreeItem classes={{ root: classes.treeItem, selected: classes.selected }} nodeId={children.id} label={children.name} />
                  )
                })
              }
            </TreeItem>
          )        
        })
      }
    </TreeView>
  )
    // <TreeView
    //   className={classes.root}
    //   multiSelect={false}
    // >
    //   <TreeItem classes={{ root: classes.treeItem, selected: classes.selected }} nodeId="1" label="Applications">
    //     <TreeItem nodeId="2" label="Calendar" />
    //     <TreeItem nodeId="3" label="Chrome" />
    //     <TreeItem nodeId="4" label="Webstorm" />
    //   </TreeItem>
    //   <TreeItem nodeId="5" label="Documents">
    //     <TreeItem nodeId="10" label="OSS" />
    //     <TreeItem nodeId="6" label="Material-UI">
    //       <TreeItem nodeId="7" label="src">
    //         <TreeItem nodeId="8" label="index.js" />
    //         <TreeItem nodeId="9" label="tree-view.js" />
    //       </TreeItem>
    //     </TreeItem>
    //   </TreeItem>
    // </TreeView>
}