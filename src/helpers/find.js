const toLower = (data) => {
  if (typeof data === 'string') return data.toLowerCase()
  if (Array.isArray(data)) return data.map((item) => item.toLowerCase())
  return data
}

export const find = (toFind, ...args) => {
  //const data = Array.isArray(args) ? args : [args]
  const dataToLower = args.map(toLower)

  return dataToLower.some((data) => {
    if (typeof data === 'string') return data.includes(toFind)
    if (Array.isArray(data)) return data.some((item) => item.includes(toFind))

    return data === toFind
  })
}
