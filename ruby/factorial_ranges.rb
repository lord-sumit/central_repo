class Integer
  def factorial
    (1..self).reduce(:*)
  end
end

puts gets.chop.to_i.factorial
