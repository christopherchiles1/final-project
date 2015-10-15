class Api::ProjectsController < ApplicationController
  def create
    @project = current_user.projects.new(project_params)
    @project.visible = true;
    if @project.save
      render json: @project
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def index
    @projects = current_user.projects
    render json: @projects
  end

  def show
    @project = Project.find(params[:id])
    render json: @project
  end

  def update
    @project = Project.find(params[:id])
    if @project.update(project_params)
      render json: @project
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def destroy
    @project = Project.find(params[:id])
    @project.destroy
    render json: @project
  end

  private

  def project_params
    params.require(:project).permit(:title, :description, :visible, :ord)
  end
end
