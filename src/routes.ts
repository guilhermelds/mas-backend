import {Router} from 'express';

const routes = Router();

//routes.get('/user', (request, response) => {
//    response.json({
//    message:'Hello World'
//    })
//    })

//routes.get('/user/:id/', (request, response) => {
//        const {id} = request.params;
//
//        response.json({
//        userId:id
//   })
//})

/* routes.get('/user/', (request, response) => {
    const {nome, idade} = request.query
    response.json({
        idade: "16",
        nome: "Guilherme"
    })
}) */

routes.post('/user', (request, response) => {
    const {name, email, password} = request.body
    const user = {
        name: "seu Jorge",
        email: "garoto_gostosinho@hotmail.com",
        password: "123456"
    }
    return response.json(user);
})
export default routes;