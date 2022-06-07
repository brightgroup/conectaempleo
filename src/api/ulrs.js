export const urls = {
  auth: {
    candidateLogin: 'auth/login',
    getCandidate: 'auth/me',
    employerLogin: 'company/login',
    getEmployer: 'company/auth/me',
    getUserProfile: 'my-profile',
  },
  utils: {
    getdepartments: 'get-states/47',
    getSkills: 'get-jobSkills',
    getCountries: 'get-countries',
    getCareerLevels: 'get-careerLevels',
    getCurrencies: 'get-currencies',
    getJobType: 'get-jobTypes',
    getJobShifts: 'get-jobShifts',
    getGenders: 'get-genders',
    getJobExperiences: 'get-jobExperiences',
    getDegreeLevel: 'get-degreeLevels',
    getSalaryPeriods: 'get-salaryPeriods',
    getCities: departmentId => `get-cities/${departmentId}`,
    getFunctionalArea: 'get-functional-areas',
    registerCandidate: 'register',
    registerEmployer: 'register-companys',
  },
  job: {
    postJob: 'store-job',
  },
}
