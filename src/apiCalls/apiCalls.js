import apiKey from '../apiKey.js'

export const getGalleries = async () => {
  const response = await fetch(`https://api.harvardartmuseums.org/object?person=28241&apikey=${apiKey}&size=20`)
  const galleries = await response.json();
  let slicedGalleries = galleries.records.slice(4, 14)
  let paintingInfo = slicedGalleries.map(resource => {
    return { 
      century: resource.century,
      title: resource.title,
      creditLine: resource.creditline,
      image: resource.primaryimageurl
    }
  })
  return paintingInfo
}