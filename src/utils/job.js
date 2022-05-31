export const getUtilsData = data => {
  const [
    { data: departments = [] },
    { data: skills = [] },
    { data: countries = [] },
    { data: currencies = [] },
    { data: careerLevels = [] },
    { data: jobTypes = [] },
    { data: jobShifts = [] },
    { data: genders = [] },
    { data: jobExperiences = [] },
    { data: gradeLevels = [] },
    { data: salaryPeriods = [] },
  ] = data
  return {
    departments,
    skills,
    countries,
    currencies,
    careerLevels,
    jobTypes,
    jobShifts,
    genders,
    jobExperiences,
    gradeLevels,
    salaryPeriods,
  }
}
