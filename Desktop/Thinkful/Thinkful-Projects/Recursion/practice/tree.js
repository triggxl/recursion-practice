function familyTreeRecursive(tree) {
  if(tree.length === 0) {
    return
  }
  tree.children.forEach(n => {
    console.log(n)
    return familyTreeRecursive(tree)
  })
}
//infinite loop

const tree = [{
    name: 'Zuckerberg',
    children: [
      {
      name: 'Schroepfer',
      children: [
          {
            name: 'Bosworth', 
              children: [
              {
                name: 'Steve',
                children: [],
                name: 'Kyle',
                children: [],
                name: 'Andra',
                children: []
              }
            ]
          },
          {
            name: 'Zhao',
            children: [
              {
                name: 'Richie',
                children: [],
                name: 'Sofia',
                children: [],
                name: 'Jen',
                children: []
              }
            ]
          }
        ]
      }
    ]
  }
]

