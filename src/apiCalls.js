export const getUrls = async () => {
  try {
    const response = await fetch('http://localhost:3001/api/v1/urls')
    const data = await response.json()
    return data
  } catch (error) {
    console.log('Error grabbing the data:', error)
  }
}

export const postUrl = async (newUrl) => {
  try {
    const response = await fetch('http://localhost:3001/api/v1/urls', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUrl),
    })
    if (response.ok) {
      const data = await response.json()
      return data
    } else {
      throw new Error('Failed to create the url')
    }
  } catch (error) {
    console.log('Error grabbing the data:', error)
    throw error
    //learned from my showcase that i need to chain errors:)
  }
}
