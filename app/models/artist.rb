class Artist < ApplicationRecord
    has_many :submits
    has_many :calls, through: :submits
    has_many :artworks
end
