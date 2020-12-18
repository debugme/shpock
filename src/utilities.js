const clearTimeout2 = (id) => clearInterval(id)

const setTimeout2 = (callback, delay, ...list) => {
  const wrapper = () => {
    callback(...list)
    clearTimeout2(id)
  }

  const id = setInterval(wrapper, delay, ...list)
  return id
}

module.exports = {
  clearTimeout2,
  setTimeout2,
}
