class User < ActiveRecord::Base
    validates :fName, presence: true
    validates :lName, presence: true
    validates :email, presence: true, uniqueness: true

    def isAdmin?
        return self.admin == true
    end
end
