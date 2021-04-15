
// Replace the value after the fifth character

export const replaceLang = (data) => {
  const dataMap = data.map((data) => data.code)
  const arrLength = dataMap.length > 5 ? dataMap.length - 5 : '';
  return dataMap.length > 5 ? dataMap.slice(0, 5) + `, +${arrLength}` : dataMap.slice(0, 5).toString()
}