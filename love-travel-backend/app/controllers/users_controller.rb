class UsersController < ApplicationController
  before_action :set_user, only: [:show,:update,:destroy]

  # skip_before_action :require_login, only: [:new, :create, :show]

  def make_trip
    byebug
    @user_trip = UserTrip.create(start_date: params["start_date"], end_date: params["end_date"], location: params["location"], notes: params["notes"], user: params["user"])
    render json: @user_trip
  end

  def your_trips
    @user = User.find(params[:user_id])
    @user_trips = @user.user_trips
    render json: @user_trips
  end


  def check_user
    @user = User.find_by(username: params[:username])
    if @user
      render json: @user
    else
      render json: {message:"Invalid"}
    end
  end

  def index
    users = User.all
    render json: users, status: 200
  end

  def create
    user = User.new(user_params)
    if user.valid?
      user.save
      render json: user, status: 201
    else
      render json: { errors: user.errors.full_messages }, status: 422
    end
  end


  def update
    @user.update(user_params)
    render json: @user, status: 200
  end

  def destroy
  end

  def show
    render json: @user, status: 200
  end

  private
  def user_params
    params.permit(:username, :motto, :bio)
  end

  def set_user
    @user = User.find(params[:id])
  end

end
