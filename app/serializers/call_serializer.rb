class CallSerializer
  include FastJsonapi::ObjectSerializer
  attributes :org, :name, :description, :medium, :deadline, :submits

end
 