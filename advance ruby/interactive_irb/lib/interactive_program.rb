class InteractiveProgram

  def execute_line(str)
    self.class.class_exec { str }
  end

end
