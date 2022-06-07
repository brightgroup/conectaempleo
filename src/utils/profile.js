export const getProfileData = data => {
  const [
    { data: genders = [] },
    { data: countries = [] },
    { data: departments = [] },
    { data: careerLevels = [] },
    { data: functionalArea = [] },
    { data: industries = [] },
  ] = data
  return {
    genders,
    countries,
    departments,
    careerLevels,
    functionalArea,
    industries,
  }
}
