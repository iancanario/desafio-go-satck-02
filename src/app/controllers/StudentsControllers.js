import Students from '../models/Students'
import User from '../models/Users'

class StudentsControllers{
    async store(req, res){
        const { name, email, age, height, weight } = req.body;
        const { adm_id } = req.headers;

        const user = User.findOne( {where: {adm_id}} );

        if (!user) {
            return res.status(400).json({ error: 'usuario nao existente' })
        }

        const { id, name, email, age, height, weight } = await Students.create( req.body )

        return res.json({id, name, email, age, height, weight );
    }
}

export default new StudentsControllers();