class Org < ApplicationRecord
    has_many :calls
    has_one_attached :orgimage
end
