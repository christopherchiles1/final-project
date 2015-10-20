class Api::TasksController < ApplicationController
  def create
    @task = current_user.tasks.new(task_params)
    @todos

    if @task.save && @task.todos.create(task_params[:todos])
      render :show
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

  def index
    @tasks = current_user.projects.find(params[:project_id]).tasks
    render :index
  end

  def show
    @task = Task.find(params[:id])
    render json: @task
  end

  def update
    @task = Task.find(params[:id])
    if @task.update(task_params) && @task.todos.update(task_params[:todos])
      render :show
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

  def destroy
    @task = Task.find(params[:id])
    @task.destroy
    render :show
  end

  private

  def task_params
    params.require(:task).permit(:title, :description, :deadline, :todos)
  end
end
