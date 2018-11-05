import apiKey from '../apiKey.js'

export const getGalleries = async () => {
  let images = []
  const response = await fetch(`https://api.harvardartmuseums.org/object?person=28241&apikey=${apiKey}&size=20`)
  const galleries = await response.json();
  let slicedGalleries = galleries.records.slice(4, 14)
  slicedGalleries.forEach(resource => {
    resource.images.forEach(image => {
      images.push(image.baseimageurl)
    })
  })
  return images
}