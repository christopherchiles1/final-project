class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user

  def login!(user)
    session[:session_token] = user.reset_session_token!
  end

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logout!
    current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end

  def ensure_logged_in
    redirect_to new_session_url unless current_user
  end

  def ensure_not_logged_in
    redirect_to users_url(current_user) if current_user
  end

  def destroy_demo!
    current_user.destroy
  end

  def seed!(user)
    user.projects.create!([
      {title: 'Finances', description: 'pay bills and keep track of money', visible: true},
      {title: 'Relaxation', description: 'fun things to do!', visible: true},
      {title: 'Organize dinner party', description: 'Event is on saturday the 10th!', visible: true},
      {title: 'Education', description: 'Make sure to keep learning new skills', visible: false}
    ])

    user.projects.where({title: 'Finances'}).first.tasks.create!([
      {title: 'Pay amex card', description: '', deadline: '4 Oct 2015'},
      {title: 'Call BofA', description: 'ask about interest rates'},
      {title: 'Roll over 401k', description: '', deadline: '26 Oct 2015'},
      {title: 'Talk to Chuck', description: ''},
      {title: 'Round up docs for 2015 taxes', description: '', deadline: '28 Nov 2015'}
    ])

    user.projects.where({title: 'Finances'}).first.tasks
                 .where({title: 'Round up docs for 2015 taxes'}).first.todos.create!([
      {body: 'Find W-2', completed: true},
      {body: 'Student loan interest form', completed: false},
      {body: 'Deductions', completed: false}
    ])

    user.projects.where({title: 'Relaxation'}).first.tasks.create!([
      {title: 'Book table at Coi', description: ''},
      {title: 'Renew gym membership', description: ''},
      {title: 'Use rock climbing groupon deal', description: 'Expires 11/12/15', deadline: '31 Oct 2015'}
    ])

    user.projects.where({title: 'Organize dinner party'}).first.tasks.create!([
      {title: 'Design menu', description: 'Do this by Saturday, 10/3', deadline: '3 Oct 2015'},
      {title: 'Grocery Shopping', description: 'Saturday at 2pm', deadline: '3 Oct 2015'},
      {title: 'Confirm guest count', description: '', deadline: '6 Oct 2015'}
    ])

    user.projects.where({title: 'Organize dinner party'}).first.tasks
                 .where({title: 'Design menu'}).first.todos.create!([
      {body: 'Call Jenna to confirm dietary restrictions', completed: true},
      {body: 'Go to farmers market this weekend', completed: false},
      {body: 'Check dinner-party blogs for inspiration', completed: false}
    ])

    user.projects.where({title: 'Organize dinner party'}).first.tasks
                 .where({title: 'Grocery Shopping'}).first.todos.create!([
      {body: 'Costco (drinks and snacks)', completed: false},
      {body: 'Trader joes', completed: false},
      {body: 'Farmers market (fresh veggies)', completed: false},
      {body: 'Local butcher for salmon and tri-tip', completed: false},
      {body: 'Home depot (buy a new grill)', completed: false}
    ])

    user.projects.where({title: 'Education'}).first.tasks.create!([
      {title: 'Read "Pale blue Dot", by Carl Sagan', description: '20 pages a day'},
      {title: 'Take Udemy C++ course to brush up', description: ''}
    ])
  end
end
