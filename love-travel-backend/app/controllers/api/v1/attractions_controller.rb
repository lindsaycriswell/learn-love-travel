class Api::V1::AttractionsController < ApplicationController
  before_action :set_attraction, only: [:show]

  def index
    attractions = Attraction.all
    render json: attractions, status: 200
  end

  # def create
  #   attraction = Attraction.create(attraction_params)
  #   render json: attraction, status: 201
  # end
  #
  # def update
  #   @attraction.update(attraction_params)
  #   render json: @attraction, status: 200
  # end
  #
  # def destroy
  #   attractionId = @attraction.id
  #   @attraction.destroy
  #   render json: {message:"Zap! Attraction deleted", attractionId:attractionId}
  # end

  def show
    render json: @attraction, status: 200
  end

  private
  # def attraction_params
  #   params.permit(:name, ETC)
  # end

  def set_attraction
    @attraction = Attraction.find(params[:id])
  end
end
