class UserController < ApplicationController
    skip_before_action :require_login, only: [:login]
    before_action :restrict_access, except: [:show, :login, :index]

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

end
