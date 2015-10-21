(function(root) {
  'use strict';

  root.TasksList = React.createClass({
    render: function () {
      return (
        <div className="tasks-list">
          {
            this.props.tasks.map(function (task) {
              return (
                <TasksListItem
                  key={task.id}
                  project={this.props.project}
                  task={task}/>
               );
            }.bind(this))
          }
        </div>
      );
    }
  });
}(this));
