export const getProfileData = data => {
  const [
    { data: genders = [] },
    { data: countries = [] },
    { data: departments = [] },
    { data: careerLevels = [] },
    { data: functionalArea = [] },
    { data: industries = [] },
    { data: entities = [] },
    { data: populationGroup = [] },
    { data: civilStatus = [] },
  ] = data
  return {
    genders,
    countries,
    departments,
    careerLevels,
    functionalArea,
    industries,
    entities,
    populationGroup,
    civilStatus,
  }
}
