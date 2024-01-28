const apiErrors = require('../error/apiErrors');
const jwt = require('jsonwebtoken');
const { User } = require('../models/models');
const bcrypt = require('bcrypt');

const generateJwt = (id, email, role) => {
	return jwt.sign({ id, email, role }, process.env.SECRET_KEY, {
		expiresIn: '24h'
	});
};

class UserController {
	async registration(request, response, next) {
		const { email, password, role } = request.body;

		if (!email || !password) {
			return next(apiErrors.badRequest('Incorrect email or password.'));
		}

		const candidate = await User.findOne({
			where: { email }
		});
		if (candidate) {
			return next(apiErrors.notFound('Such user is already exist.'));
		}

		const hashPassword = await bcrypt.hash(password, 5);
		const user = await User.create({
			email,
			role,
			password: hashPassword
		});
		const token = generateJwt(user.id, user.email, user.role);
		return response.json({ token });
	}

	async login(request, response, next) {
		const { email, password } = request.body;

		const user = await User.findOne({
			where: { email }
		});
		if (!user) {
			return next(apiErrors.notFound('There is no such user.'));
		}

		const comparePassword = bcrypt.compareSync(password, user.password);
		if (!comparePassword) {
			return next(apiErrors.serverError('Incorrect password.'));
		}

		const token = generateJwt(user.id, user.email, user.role);
		return response.json({ token });
	}

	async getUsers(request, response) {
		const users = await User.findAll();
		return response.json(users);
	}

	async checkAuthorization(request, response) {
		const token = generateJwt(
			request.user.id,
			request.user.email,
			request.user.role
		);
		return response.json({ token });
	}
}

module.exports = new UserController();