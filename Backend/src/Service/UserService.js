import { UserRepo } from "../Composer/composer.js";


class UserService {
    // Implement user-related business logic here

    // function to get all users (only for SuperAdmin)
    async getAllUsers() {
        try {
            const users = await UserRepo.getAllUsers();
            return users;
        } catch (error) {
            throw error;
        }
    }

    // function to get user profile by user id
    async getUserProfile(userId) {
        try {
            const userProfile = await UserRepo.findById(userId);
            return userProfile;
        } catch (error) {
            throw error;
        }
    }

    // function to update user details by user id
    async updateUserDetails(userId, updateData) {
        try {
            const updatedUser = await UserRepo.update(userId, updateData);
            return updatedUser;
        } catch (error) {
            throw error;
        }
    }

    // function to delete user account by user id
    async deleteUserAccount(userId) {
        try {
            return await UserRepo.delete(userId);
        } catch (error) {
            throw error;
        }
    }
}

export default UserService;