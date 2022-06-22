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
    { data: functionalArea = [] },
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
    functionalArea,
  }
}

export const setFilterJobUtils = data => {
  const [
    { data: companies = [] },
    { data: skills = [] },
    { data: jobTypes = [] },
    { data: degreeLevel = [] },
    { data: jobExperiences = [] },
    { data: currencies = [] },
    { data: departments = [] },
    { data: careerLevels = [] },
    { data: functionalArea = [] },
    { data: salaryPeriods = [] },
  ] = data
  return {
    companies: companies.companies.data,
    skills,
    jobTypes,
    degreeLevel,
    jobExperiences,
    currencies,
    departments,
    careerLevels,
    functionalArea,
    salaryPeriods,
  }
}
