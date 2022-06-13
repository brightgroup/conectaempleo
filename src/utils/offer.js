export const getOfferData = data => {
  const [
    { data: skills = [] },
    { data: countries = [] },
    { data: departments = [] },
    { data: salaryPeriods = [] },
    { data: functionalArea = [] },
    { data: currencies = [] },
    { data: gradeLevels = [] },
    { data: jobExperiences = [] },
    { data: jobTypes = [] },
  ] = data
  return {
    skills,
    countries,
    departments,
    salaryPeriods,
    functionalArea,
    currencies,
    gradeLevels,
    jobExperiences,
    jobTypes,
  }
}
