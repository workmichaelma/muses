import React from 'react';
import Router from 'next/router'
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
  // treeItem: {
  //   '&:focus > $content $label, &:hover > $content $label, &$selected > $content $label': {
  //     backgroundColor: 'transparent',
  //   },
  // },
  selected: {
    // backgroundColor: 'transparent'
    // '& $content': {
    //   fontSize: '3rem'
    // },
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
    id: 'species',
    name: '款式',
    children: [
      {
        id: 'new',
        name: '新品系列',
      },
      {
        id: 'bracelet',
        name: '手鏈',
      },
      {
        id: 'necklace',
        name: '項鏈',
      },
      {
        id: 'ring',
        name: '戒指',
      },
      {
        id: 'earring',
        name: '耳環',
      },
      {
        id: 'crystal-ball',
        name: '水晶球',
      },
    ],
  },
  {
    id: 'forYou',
    name: '度身訂造',
    url: '/personalization',
  },
  {
    id: 'seasonal',
    name: '季節限定',
    url: '/seasonal'
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
            <TreeItem
              classes={{ root: classes.treeItem, selected: classes.selected }}
              nodeId={root.id}
              label={root.name}
              key={root.name}
              onLabelClick={() => {
                Router.push(root.url)
              }}
            >
              {
                root.children && map(root.children, children => {
                  return (
                    <TreeItem
                      classes={{ root: classes.treeItem, selected: classes.selected }}
                      nodeId={children.id}
                      label={children.name}
                      key={children.name}
                      onLabelClick={() => {
                        Router.push(`/products/${children.id}`)
                      }}
                    />
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