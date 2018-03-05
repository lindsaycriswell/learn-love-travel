class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :user_id, :location_id

  belongs_to :location
  belongs_to :user
end
