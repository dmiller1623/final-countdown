import apiKey from '../apiKey.js'

export const getGalleries = async () => {
  const response = await fetch(`https://api.harvardartmuseums.org/gallery?apikey=${apiKey}`)
  const galleries = await response.json();
  console.log(galleries)
}