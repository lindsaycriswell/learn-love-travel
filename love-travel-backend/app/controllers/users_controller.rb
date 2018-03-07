class UsersController < ApplicationController
  before_action :set_user, only: [:show,:update,:destroy]

  # skip_before_action :require_login, only: [:new, :create, :show]

  def login
    # byebug
    u = User.find_by(username: params[:username])
    if u && u.authenticate(params[:password])
      token = issue_token({ 'user_id': u.id })
      render json: {'token': token, 'user': u }
    else
      render json: {'error': 'Could not find or authenticate user'}, status: 401
    end
  end

  def current
    if !current_user.present?
      render json: {error: "No user id present"}
    else
      render json: current_user
    end
  end

  # def check_user
  #   @user = User.find_by(username: params[:username])
  #   if @user
  #     render json: @user
  #   else
  #     render json: {message:"Invalid"}
  #   end
  # end

  def index
    users = User.all
    render json: users, status: 200
  end

  def create
    # byebug
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
    params.permit(:username, :password, :password_confirmation, :motto, :bio)
  end

  def set_user
    @user = User.find(params[:id])
  end

end
