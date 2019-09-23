class Artist < ApplicationRecord

    validates :email, uniqueness: { message: "already exists" }

    has_secure_password
    has_many :submits
    has_many :calls, through: :submits
    has_many :artworks
    has_one_attached :avatar
end
