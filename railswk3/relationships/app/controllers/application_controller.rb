class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  before_action :requireLogin

  def requireLogin
    puts 'image me blocking your access'

    # unless(current_user)
    #   redirect_to 'login_path'
    # end
  end

end
