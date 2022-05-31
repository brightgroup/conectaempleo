export const formatDepartments = (data = []) => {
  return data?.map(item => ({
    id: item.id,
    value: item.departamento,
    cities: item.ciudades?.map((city, index) => ({
      id: `city${index}`,
      value: city,
    })),
  }))
}
