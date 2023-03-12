const arrObjectSearch = (objects, toSearch) => {
  const results = []
  if (toSearch === '') {
    return objects
  }

  for (let i = 0; i < objects.length; i++) {
    for (key in objects[i]) {
      if (
        (objects[i][key] + '').toLowerCase().indexOf(toSearch.toLowerCase()) !=
        -1
      ) {
        results.push(objects[i])
        break
      }
    }
  }

  return results
}

export default arrObjectSearch
