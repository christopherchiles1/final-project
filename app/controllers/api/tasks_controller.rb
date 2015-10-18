class Api::TasksController < ApplicationController
  def create
    @task = current_user.tasks.new(task_params)

    if @task.save
      render json: @task
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

  def index
    @tasks = current_user.tasks
    render json: @tasks
  end

  def show
    @task = Task.find(params[:id])
    render json: @task
  end

  def update
    @task = Task.find(params[:id])
    if @task.update(task_params)
      render json: @task
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

  def destroy
    @task = Task.find(params[:id])
    @task.destroy
    render json: @task
  end

  private

  def task_params
    params.require(:task).permit(:title, :description, :deadline)
  end
end
