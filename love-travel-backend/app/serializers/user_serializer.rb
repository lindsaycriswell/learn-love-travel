class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :motto, :bio
  has_many :trips
  has_many :locations, through: :trips
  has_many :comments
  has_many :locations, through: :comments
end
