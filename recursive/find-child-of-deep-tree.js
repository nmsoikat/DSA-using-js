const root = {
  id: 0,
  title: "category-tree",
  parent_id: null,
  children: [
    {
      id: 1,
      title: "Electronic",
      parent_id: 0,
      children: [
        {
          id: 3,
          title: "Laptop",
          parent_id: 1,
          children: [
            {
              id: 5,
              title: "Dell",
              parent_id: 3
            },
            {
              id: 6,
              title: "Asus",
              parent_id: 3
            }
          ]
        },
        {
          id: 4,
          title: "Desktop",
          parent_id: 1
        }
      ]
    },
    {
      id: 2,
      title: "Book",
      parent_id: 0
    }
  ]
}

function findChild(nodes, target_id) {
  let item = null;
  nodes.forEach((node) => {
    if (node.id === target_id) {
      item = node;
      return node;
    }

    if (node.children) {
      item = findChild(node.children, target_id)
    }
  });

  return item;
}

console.log(findChild(root.children, 3));