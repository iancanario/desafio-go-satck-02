
import jwt from 'jsonwebtoken';
import * as Yup from 'yup';


import User from '../models/Users';

class SessionController {
  async store(req, res) {

    const schema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string().required()
    });

    if(!(await schema.isValid(req.body))){
      return res.status(400).json({ error: 'Erro na validação' });
    }

    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ error: 'Usuario inexistente' });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'Senha incorreta' });
    }
    const { id, name } = user;

    return res.json({
      user: {
        id,
        name,
        email,
      },
      token: jwt.sign({ id }, 'b4fe8dfb6ba36a08142e24184c5ba53f', {
        expiresIn: '7d',
      }),
    });
  }
}

export default new SessionController();
