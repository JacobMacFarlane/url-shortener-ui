export const getUrls = async () => {
  try {
    const response = await fetch('http://localhost:3001/api/v1/urls')
    const data = await response.json()
    return data
  } catch (error) {
    console.log('Error grabbing the data:', error)
  }
}
