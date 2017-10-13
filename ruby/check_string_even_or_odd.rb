require_relative "string_display_by_length.rb"

class Array
  def check_even_odd
    display_by_length.values.group_by do |element_values|
      if element_values[0].length.even?
        "even"
      else
        "odd"
      end
    end
  end
end

puts gets.chop.split("\s").check_even_odd
