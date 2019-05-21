'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', ({request, response}) => {
  return response.status(200).json({
    message: 'welcome to our api'
  })
})

Route.get('/users', 'UserController.index')
//Route.post('/users', 'UserController.create')
//Route.post('/sessions', 'SessionController.create')