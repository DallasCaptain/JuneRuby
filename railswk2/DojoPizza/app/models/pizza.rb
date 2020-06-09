class Pizza < ActiveRecord::Base
    validates :name, length: { minimum: 2 } , presence: true
    validates :address, length: { minimum: 2 } , presence: true

    has_many :customers
end
