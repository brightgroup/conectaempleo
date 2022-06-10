export const urls = {
  auth: {
    candidateLogin: 'auth/login',
    getCandidate: 'auth/me',
    employerLogin: 'company/login',
    getEmployer: 'company/auth/me',
  },
  user: {
    getProfile: 'my-profile',
    updateUser: 'my-profile',
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
    getIndustries: 'get-industries',
    getPopulationGroup: 'get-groups-status',
    getCivilStatus: 'get-civil-status',
    registerCandidate: 'register',
    registerEmployer: 'register-companys',
    getEntityClassification: 'get-ownership-types',
  },
  job: {
    postJob: 'store-job',
    getJobs: 'posted-jobs',
    deleteJobOffer: 'delete-front-job',
  },
  company: {
    getCompanies: 'companies',
    getCompany: 'company-profile',
    updateProfile: 'update-company-profile',
  },
}
