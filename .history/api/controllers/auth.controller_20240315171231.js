import User from '../models/user.model.js';

export const signup = asy(req, res) => {
  const { username, email, password } = req.body;
  // const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password });
    await newUser.save()
  // try {
  //   await newUser.save();
  //   res.status(201).json('User created successfully!');
  // } catch (error) {
  //   next(error);
  // }
  
};