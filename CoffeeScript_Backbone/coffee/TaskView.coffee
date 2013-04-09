class window.TaskView extends Backbone.View

  template: "<div class='task'><%= title %></div>"

  render: ->
    if @model.completionStatus then @$el.addClass 'crossed-out'
    @$el.html @template @model.attributes
