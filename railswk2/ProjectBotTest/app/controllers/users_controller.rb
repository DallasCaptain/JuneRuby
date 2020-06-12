class UsersController < ApplicationController

    def new

    end

    def create
        user = User.create(userParams)
        p User.all
        unless user.errors.any?
            render plain: "User successfully created" and return
        end
           
            render plain: "User creation Failed"
    end

    def userParams
        params.require(:user).permit(:fName,:lName,:email)
    end
end
