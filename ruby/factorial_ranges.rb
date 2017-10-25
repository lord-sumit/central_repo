class Integer
  def factorial
    return 1 if self == 0
    (1..self).reduce(:*)
  end
end

puts gets.chop.to_i.factorial
