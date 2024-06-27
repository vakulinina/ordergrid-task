import cloudyImg from './cloudy.svg'
import partlyCloudyImg from './partly_cloudy.svg'
import rainImg from './rainy.svg'
import sunnyImg from './sunny.svg'

const imagesConfig = {
  cloudy: cloudyImg,
  sunny: sunnyImg,
  partly_cloudy: partlyCloudyImg,
  clear: sunnyImg,
  rain: rainImg,
  fog: cloudyImg,
}

export const getImageByCondition = (condition) => {
  console.log(condition, typeof condition)
  const key = condition.toLowerCase().split(' ').join('_')

  return imagesConfig[key]
}
