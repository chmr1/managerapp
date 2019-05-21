'use strict'

const User = use('App/Models/User')

class UserController {
    async index ({request, response}) {
        const reqData = request.all()
        const limit = reqData.limit || 20
        const page = reqData.page || 1 
       
        let builder = User.query()
        const users = await builder
          .orderBy('id', 'desc')
          .paginate(page, limit)
        response.status(200).json({
          message: 'All Users',
          data: users
        })
       }

    async create ({ request }) {
        const data = request.only(['username', 'email', 'password'])
        const user = await User.create(data)
        return user
    }
}

module.exports = UserController
