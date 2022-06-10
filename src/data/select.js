export const EMPLOYEES_NUMBER = [
  '1-10',
  '11-50',
  '51-100',
  '101-200',
  '201-300',
  '301-600',
  '601-1000',
  '1001-1500',
  '1501-2000',
  '2001-2500',
  '2501-3000',
  '3001-3500',
  '3501-4000',
  '4001-4500',
  '4501-5000',
  '5000+',
]

export const ROLES = ['Egresado', 'Estudiante']

export const getYears = () => {
  const [start, finish] = [1918, new Date().getFullYear()]
  const years = []

  for (let i = finish; i >= start; i--) years.push(i)
  return years
}
