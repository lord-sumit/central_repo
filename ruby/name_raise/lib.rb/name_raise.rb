class Name < RuntimeError
  attr_accessor :first_name, :last_name

  def str_empty?
    begin
      raise "first name cannot be blank" if first_name.length == 0
      raise "last name cannot be blank" if last_name.length == 0
    end
  end

  def chr_cap?
    begin
      raise "first name must be start with a uppercase letter" if first_name.chr.upcase!
      raise "last name must be start with a uppercase letter" if last_name.chr.upcase!
    end
  end

end
