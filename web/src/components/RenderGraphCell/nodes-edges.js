export const initialNodes = [
  {
    id: '084b7bc0bf83fc281a6c1ad7097d3de6',
    data: {
      id: '084b7bc0bf83fc281a6c1ad7097d3de6',
      label: '/newEmptyUser',
      componentType: 'Route',
      filePath:
        '/Users/dthyresson/Dropbox/Code/redwoodjs/rsc-tests/test-project-rsc-external-packages-and-cells/web/src/Routes.tsx',
      renderContext: 'client',
    },
    position: { x: 0, y: 0 },
  },
  {
    id: '4a787d10898f7defdb27849eb620db98',
    data: {
      id: '4a787d10898f7defdb27849eb620db98',
      label: 'NewEmptyUserPage',
      componentType: 'Page',
      filePath:
        '/Users/dthyresson/Dropbox/Code/redwoodjs/rsc-tests/test-project-rsc-external-packages-and-cells/web/src/pages/EmptyUser/NewEmptyUserPage/NewEmptyUserPage.tsx',
      renderContext: 'server',
    },
    position: { x: 0, y: 0 },
  },
  {
    id: '982ead600254d0ac7e33740c2c1007c4',
    data: {
      id: '982ead600254d0ac7e33740c2c1007c4',
      label: 'NavigationLayout',
      componentType: 'Layout',
      filePath:
        '/Users/dthyresson/Dropbox/Code/redwoodjs/rsc-tests/test-project-rsc-external-packages-and-cells/web/src/layouts/NavigationLayout/NavigationLayout.tsx',
      renderContext: 'client',
    },
    position: { x: 0, y: 0 },
  },
  {
    id: '27ba56cbe96d06d94c15a4d4443416db',
    data: {
      id: '27ba56cbe96d06d94c15a4d4443416db',
      label: 'ScaffoldLayout',
      componentType: 'Layout',
      filePath:
        '/Users/dthyresson/Dropbox/Code/redwoodjs/rsc-tests/test-project-rsc-external-packages-and-cells/web/src/layouts/ScaffoldLayout/ScaffoldLayout.tsx',
      renderContext: 'client',
    },
    position: { x: 0, y: 0 },
  },
  {
    id: 'fae5877b71efaca2ebf9b9aa14765ac4',
    data: {
      id: 'fae5877b71efaca2ebf9b9aa14765ac4',
      label: 'NewEmptyUser',
      componentType: 'Component',
      filePath:
        '/Users/dthyresson/Dropbox/Code/redwoodjs/rsc-tests/test-project-rsc-external-packages-and-cells/web/src/components/EmptyUser/NewEmptyUser/NewEmptyUser.tsx',
      renderContext: 'shared',
    },
    position: { x: 0, y: 0 },
  },
  {
    id: '69d4569fbf0637240721f1ee7d9ca3fa',
    data: {
      id: '69d4569fbf0637240721f1ee7d9ca3fa',
      label: 'EmptyUserForm',
      componentType: 'Component',
      filePath:
        '/Users/dthyresson/Dropbox/Code/redwoodjs/rsc-tests/test-project-rsc-external-packages-and-cells/web/src/components/EmptyUser/EmptyUserForm/EmptyUserForm.tsx',
      renderContext: 'client',
    },
    position: { x: 0, y: 0 },
  },
]
export const initialEdges = [
  {
    id: 'c032de052272b42a091e19bc34c7b0ed',
    source: '084b7bc0bf83fc281a6c1ad7097d3de6',
    target: '4a787d10898f7defdb27849eb620db98',
    label: 'newEmptyUser routes to NewEmptyUserPage page',
    type: 'step',
    data: {
      source:
        '/Users/dthyresson/Dropbox/Code/redwoodjs/rsc-tests/test-project-rsc-external-packages-and-cells/web/src/pages/EmptyUser/NewEmptyUserPage/NewEmptyUserPage.tsx',
      target: 'newEmptyUser',
    },
  },
  {
    id: 'b58a7bd6f35217de3dcfd937cfe3d1a7',
    source: '982ead600254d0ac7e33740c2c1007c4',
    target: '4a787d10898f7defdb27849eb620db98',
    label: 'layout NavigationLayout wraps NewEmptyUserPage page',
    type: 'step',
    data: {
      source:
        '/Users/dthyresson/Dropbox/Code/redwoodjs/rsc-tests/test-project-rsc-external-packages-and-cells/web/src/pages/EmptyUser/NewEmptyUserPage/NewEmptyUserPage.tsx',
      target:
        '/Users/dthyresson/Dropbox/Code/redwoodjs/rsc-tests/test-project-rsc-external-packages-and-cells/web/src/layouts/NavigationLayout/NavigationLayout.tsx',
    },
  },
  {
    id: '7565e354c02613b023955f3a3a62f480',
    source: '27ba56cbe96d06d94c15a4d4443416db',
    target: '4a787d10898f7defdb27849eb620db98',
    label: 'layout ScaffoldLayout wraps NewEmptyUserPage page',
    type: 'step',
    data: {
      source:
        '/Users/dthyresson/Dropbox/Code/redwoodjs/rsc-tests/test-project-rsc-external-packages-and-cells/web/src/pages/EmptyUser/NewEmptyUserPage/NewEmptyUserPage.tsx',
      target:
        '/Users/dthyresson/Dropbox/Code/redwoodjs/rsc-tests/test-project-rsc-external-packages-and-cells/web/src/layouts/ScaffoldLayout/ScaffoldLayout.tsx',
    },
  },
  {
    id: '06338d5ba4aa255d41e8072b7195ade5',
    source: '4a787d10898f7defdb27849eb620db98',
    target: 'fae5877b71efaca2ebf9b9aa14765ac4',
    label: 'NewEmptyUser component imported from NewEmptyUserPage',
    type: 'step',
    data: {
      source: '4a787d10898f7defdb27849eb620db98',
      sourceType: 'Page',
      target: 'fae5877b71efaca2ebf9b9aa14765ac4',
      targetType: 'Component',
    },
  },
  {
    id: '2cfabf8550bdd3401cb9b2215a2aa0b1',
    source: 'fae5877b71efaca2ebf9b9aa14765ac4',
    target: '69d4569fbf0637240721f1ee7d9ca3fa',
    label: 'EmptyUserForm component imported from NewEmptyUser',
    type: 'step',
    data: {
      source: 'fae5877b71efaca2ebf9b9aa14765ac4',
      sourceType: 'Component',
      target: '69d4569fbf0637240721f1ee7d9ca3fa',
      targetType: 'Component',
    },
  },
]
