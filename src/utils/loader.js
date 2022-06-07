export const toggleLoader = (status = 'true') => {
  // const loader = JSON.parse(localStorage['loader'] || 'false') || false
  // if (loader) return localStorage.removeItem('loader')
  // localStorage.setItem('loader', 'true')
  console.log('dentro')
  localStorage.setItem('loader', status)
}
