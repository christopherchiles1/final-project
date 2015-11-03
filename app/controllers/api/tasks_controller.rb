class Api::TasksController < ApplicationController
  before_action :ensure_logged_in

  def create
    project = current_user.projects.find(params[:project_id])
    @task = project.tasks.new(task_params)

    if @task.save
      render :show
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

  def index
    @tasks = current_user.projects.find(params[:project_id]).tasks.includes(:todos)
    render :index
  end

  def show
    @task = current_user.tasks.includes(:todos).find(params[:id])
    render json: @task
  end

  def update
    @task = current_user.tasks.find(params[:id])

    if !todos_owned_by?(@task)
      raise 'ID mismatch error.'
    end

    if @task.update(task_params)
      render :show
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

  def destroy
    @task = current_user.tasks.find(params[:id])
    @task.destroy
    render :show
  end

  private

  def task_params
    params
      .require(:task)
      .permit(:title, :description, :deadline,
        todos_attributes: [:id, :body, :completed])
  end

  def todos_owned_by?(task)
    valid = true
    if task_params[:todos_attributes]
      todo_ids = task.todo_ids
      task_params[:todos_attributes].each do |_, todo|
        next unless todo[:id]
        valid = false unless todo_ids.include?(todo[:id].to_i)
      end
    end
    valid
  end
end
