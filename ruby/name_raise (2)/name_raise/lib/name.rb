require_relative 'blank_string_error.rb'
require_relative 'capitalize_error.rb'

class Name

  attr_accessor :firstname , :lastname

  def blank?(string)
    string.nil? || string.empty?
  end

  def capitalize?(string)
    string.eql?(string.capitalize)
  end

  def validate_blank_and_capitalize!(string)
    raise BlankStringError if blank?(string)
    raise CapitalizeError unless capitalize?(string)
  end

  def validate
    validate_blank_and_capitalize!(firstname)
    validate_blank_and_capitalize!(lastname)
  end

  def to_s
    "#{firstname} #{lastname}"
  end

end
