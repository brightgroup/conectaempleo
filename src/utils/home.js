export const getHomedata = data => {
  const [{ data: functionalArea = [] }, { data: departments = [] }] = data
  return {
    functionalArea,
    departments,
  }
}
