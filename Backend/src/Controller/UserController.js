import { UserSer } from "../Composer/composer.js";


class UserController {

    // function to get all users list
    async getAllUsers(req, res) {
        try {
            const users = await UserSer.getAllUsers();
            res.status(200).json({
                success: true,
                data: users
            })
        } catch (error) {
            res.status(error.status || 500).json({success: false, message: error.message});
        }
    }

    // function to get user profile
    async getUserById(req, res) {
        try {
            const userId = req.user.id;
            const userProfile = await UserSer.getUserProfile(userId);
            res.status(200).json({
                success: true,
                data: userProfile
            })
        } catch (error) {
            res.status(error.status || 500).json({success: false, message: error.message});
        }
    }


    // function to update user details
    async updateUser(req, res) {
        try {
            const userId = req.user.id;
            const updateData = req.body;
            if(!updateData) throw new Error("There is no data to update");
            const updatedUser = await UserSer.updateUserDetails(userId, updateData);
            res.status(200).json({
                success: true,
                data: updatedUser
            })
        } catch (error) {
            res.status(error.status || 500).json({success: false, message: error.message});
        }
    }


    /**
     * function to delete user account. This will be a soft delete where we will set a flag isDeleted to true instead of actually deleting the user from database. This is to prevent data loss and also to keep the history of user activities.
     * The user will not be able to login or access any resources once the account is marked as deleted. We can also implement a feature to restore the account within a certain time frame before permanently deleting it from database.
     */
    async deleteUser(req, res) {
        try {
            const userId = req.user.id;
            await UserSer.deleteUserAccount(userId);
             // Clear the accessToken and refreshToken cookies
             res.clearCookie('accessToken');
             res.clearCookie('refreshToken');

             res.status(200).json({
                success: true,
                message: "User account deleted successfully"
            });
        } catch (error) {
            res.status(error.status || 500).json({success: false, message: error.message});
        }
    }
}

export default UserController;