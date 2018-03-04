class UserTripSerializer < ActiveModel::Serializer
  attributes :user, :location, :start_date, :end_date, :notes

  belongs_to :user
  belongs_to :location
end
