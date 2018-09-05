'use strict'

const Env = use('Env')
const Model = use('Model')

class Image extends Model {
  static get computed(){
    return['url']
  }
  getUrl ({path}){
    return `${Env.get('App_URL')}/images/${path}`
  }
}

module.exports = Image
