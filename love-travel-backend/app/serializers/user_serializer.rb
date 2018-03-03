class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :motto, :bio
  has_many :user_trips
  has_many :locations, through: :user_trips
end
