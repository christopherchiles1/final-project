class Api::TasksController < ApplicationController
  def create
    @task = current_user.tasks.new(task_params)
    if current_user.project_ids.include?(params[:project_id])
      #blow up
    end
    @task.project_id = params[:project_id]

    if @task.save
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

    if @task.assign_attributes(task_params)
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
    params
      .require(:task)
      .permit(:title, :description, :deadline, todos_attributes: [:body, :completed])
  end

  # def parseTodos(task)
  #   task_params[:todos].each do |todo|
  #     if todo.id
  #       Todo.find(todo.id).update_attributes!(todo)
  #     else
  #       task.todos.create!(todo)
  #     end
  #   end
  # end
end
