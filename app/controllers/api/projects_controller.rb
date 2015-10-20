class Api::ProjectsController < ApplicationController
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
    @project = Project.find(params[:id])
    render :show
  end

  def update
    @project = Project.find(params[:id])
    if @project.update(project_params)
      render :show
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def destroy
    @project = Project.find(params[:id])
    @project.destroy
    render :show
  end

  private

  def project_params
    params.require(:project).permit(:title, :description, :visible)
  end
end
