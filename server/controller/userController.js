import { UserModel } from "../models/index.js";

const getFollowersOfAParticularUser = async (req, res) => {
  try {
    const { _id } = req.params;
    const { followers } = await UserModel.findById(_id).populate("followers");
    return res.status(200).json({ followers });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getFollowingsOfAParticularUser = async (req, res) => {
  try {
    const { _id } = req.params;
    const { following } = await UserModel.findById(_id).populate("following");
    return res.status(200).json({ following });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export { getFollowersOfAParticularUser, getFollowingsOfAParticularUser };
