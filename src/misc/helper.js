export function getItems(id, products) {
  const items = [];

  products.forEach(item => {
    if (item.categoryId === id) items.push(item);
  });

  return items;
}
