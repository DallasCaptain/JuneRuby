class UserController < ApplicationController
    skip_before_action :require_login, only: [:login]
    before_action :restrict_access, except: [:show, :login, :index]

    def index
        @users = User.all
        @time = Time.new
        p @time.strftime('%A, %B-%d ')
    end

    def show
        puts 'GoodBye'
    end
    
    def login
        puts 'Please be quite!'
        render 'show'
    end

    def alsoshow
        render 'show'
    end

    def restrict_access
        # unless (current_user.id == params[:id])
        #    redirect_to '/'
        # end
    end

    def new
    end

    def create
        # user = User.new()
        # user.name = params[:user][:name]
        # user.save

        user = User.create(userParams)
        if user.errors.any?
            p user.errors.full_messages
        end



        redirect_to '/'
    end

    private
    def userParams
        params.require(:user).permit(:name, :email, :pet_id)
    end


end
