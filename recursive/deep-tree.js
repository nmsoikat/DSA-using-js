/**
 * Create tree from (Parent child data). without recursion O(n)
 * ex: category table
 * ----------------------------
 * id | title      | parent_id
 * ----------------------------
 * 1  | Electronic | 0
 * 2  | Book       | 0
 * 3  | Laptop     | 1
 * 4  | Desktop    | 1
 * 5  | Dell       | 3
 * 6  | Asus       | 3
 *
 */

const data = [
  {
    id: 1,
    title: 'Electronic',
    parent_id: 0
  },
  {
    id: 2,
    title: 'Book',
    parent_id: 0
  },
  {
    id: 3,
    title: 'Laptop',
    parent_id: 1
  },
  {
    id: 4,
    title: 'Desktop',
    parent_id: 1
  },
  {
    id: 5,
    title: 'Dell',
    parent_id: 3
  },
  {
    id: 6,
    title: 'Asus',
    parent_id: 3
  }
]

//1. Id and index mapping using hash table. It will help to making a tree
const mappedIdAndIndex = data.reduce((acc, item, i) => {
  acc[item.id] = i
  return acc;
}, {}) // O(n)
/**
 * output:
 * mappedIdAndIndex = {
 *  1: 0,
 *  2: 1,
 *  3: 2,
 *  4: 3,
 *  5: 4,
 *  6: 5
 * }
 */

//2. Find parent and insert as a child
const root = {
  id: 0,
  title: 'category-tree',
  parent_id: null,
  children: []
}

data.forEach((node) => {
  if (node.parent_id === 0) {
    root.children.push(node)
    return;
  }

  //find the parent of node
  const parentIndex = mappedIdAndIndex[node.parent_id]
  const parentNode = data[parentIndex]

  //push the node as a children of the parentNode
  if (!parentNode.children) {
    parentNode.children = []
  }
  parentNode.children.push(node)
}) //O(n)

console.log("🚀 ~ file: deep-tree.js:73 ~ root:", JSON.stringify(root, '', 4))