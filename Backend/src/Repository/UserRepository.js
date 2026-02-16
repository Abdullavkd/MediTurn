import userModel from "../Model/userModel.js";


class UserRepository {
    async findByEmail(email) {
        try {
            if(!email) throw new Error("Email is Required");
            return await userModel.findOne({email: email.trim().toLowerCase()});
        } catch (error) {
            console.error(`Repo Error (findByEmail): ${error.message}`)
            throw error;
        }
    }

    async findById(id) {
        try {
            if(!id) throw new Error("User ID is Required");
            return await userModel.findById(id).select("-password");
        } catch (error) {
            console.error(`Repo Error (findById): ${error.message}`);
            throw error;
        }
    }

    async update(id, updateData) {
        try {
            if(!id) throw new Error("User ID is required for user updating")
            const updatedUser = await userModel.findByIdAndUpdate(
                id,
                {$set: updateData},
                {new: true, nunValidators: true}
            ).select("-password");

            if(!updatedUser) throw new Error("User not found to update");
            return updatedUser;
        } catch (error) {
            throw error;
        }
    }

    async create(userData) {
        try {
            if(!userData) throw new Error("UserData is required for user creation");
            const newUser = await userModel.create(userData);
            
            const userObj = newUser.toObject();
            delete userObj.password;

            return userObj;
        } catch (error) {
            throw error;
        }
    }

    async delete(id) {
        try {
            if(!id) throw new Error("User ID is required for user deleting");
            const deletedUser = await userModel.findByIdAndDelete(id);
            if(!deletedUser) throw new Error("User Not Found");
            return {success: true, message: "User Account Deleted Successfully"}
        } catch (error) {
            throw error;
        }
    }
}

export default UserRepository;