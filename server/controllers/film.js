import UserScheme from "../Schema/film.js";
export const getUsers = async (req, res) => {
  const data = await UserScheme.find({});
  res.send(data);
};
export const getUser = async (req, res) => {
  const id = req.params.id;
  const data = await UserScheme.findById(id);
  res.send(data);
};
export const deleteUser = async (req, res) => {
  const id = req.params.id;
  const data = await UserScheme.findByIdAndDelete(id);
  res.send(data);
};
export const updateUser = async (req, res) => {
  const id = req.params.id;
  const data = await UserScheme.findByIdAndUpdate(id, req.body);
  res.send(data);
};
export const postUser = async (req, res) => {
  const data = new UserScheme({
    title: req.body.title,
    description: req.body.description,
    image: req.body.image,
    category: req.body.category,
  });
  data.save();
  res.send({ message: "User Created" });
};
