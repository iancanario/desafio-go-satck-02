import { Router } from 'express';

import SessionCrontroller from './app/controllers/SessionControllers'
import SessionStudents from './app/controllers/StudentsControllers'

const routes = new Router();

routes.post('/sessions', SessionCrontroller.store)
routes.post('/students', SessionStudents.store)

export default routes;
