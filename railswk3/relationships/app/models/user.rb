class User < ActiveRecord::Base
    validates :name, presence: true

    has_many :secrets
    has_many :likes
    has_many :secrets_liked, through: :likes, source: :secret
end
