class UsersController < ApplicationController
  skip_before_action :require_login, only: [:index]
  before_action :require_perm, only: [:show]


  def index
  end

  def show
  end

  def require_perm
    # puts '*'*20
    # p current_user
    # p params
    unless current_user[:id] == params[:id].to_i
      render 'notAllowed'
    end
  end

end
