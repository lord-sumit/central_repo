class Object

  def send_with_arg(method, arg)
    public_send method, arg
  end

end
