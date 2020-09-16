import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer MZucBq1pcw0O5bFzF4DM1zHpNx6TqVeuQF_wZsCr8EhCiFGog76TFdiEdqpWnR0PR-wMAumJ8kvZoP2S50mPRXSpn2WbggfbyNw2jWoFp5MCnRKMGf_QzMl6fDBfX3Yx',
  },
})
