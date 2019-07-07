class Call < ApplicationRecord
  belongs_to :org
  has_many :submits
  has_many :artists, through: :submits
end
