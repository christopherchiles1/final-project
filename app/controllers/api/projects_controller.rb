class Api::ProjectsController < ApplicationController
  before_action :ensure_logged_in

  def create
    @project = current_user.projects.new(project_params)
    @project.visible = true;
    
    if @project.save
      render :show
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def index
    @projects = current_user.projects
    render :index
  end

  def show
    @project = current_user.projects.find(params[:id])
    render :show
  end

  def update
    @project = current_user.projects.find(params[:id])
    if @project.update(project_params)
      render :show
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def destroy
    @project = current_user.projects.find(params[:id])
    @project.destroy
    render :show
  end

  private

  def project_params
    params.require(:project).permit(:title, :description, :visible)
  end
end
