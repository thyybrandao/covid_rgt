import { situationCollection } from './firebase'

class SituationController {
  async getAll() {
    return situationCollection.doc('ZqrsOZWBsxIhREOxtG5z').get()
  }

  async listenData() {
    let dataSituation
    situationCollection.doc('ZqrsOZWBsxIhREOxtG5z').onSnapshot((doc) => {
      //console.log(doc.data())
      dataSituation = doc.data()
    })

    console.log(dataSituation)
    return dataSituation
  }

  async create(tutorial) {
    return situationCollection.push(tutorial)
  }

  async update(key, value) {
    return situationCollection.child(key).update(value)
  }

  async delete(key) {
    return situationCollection.child(key).remove()
  }

  async deleteAll() {
    return situationCollection.remove()
  }
}

export default new SituationController()
