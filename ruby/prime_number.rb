class Integer
  def step
    (2..self).find_all { |number| !number.prime? }
  end
  def prime?
    return false if self == 2
    (2..self-1).any? { |number| self % number == 0 }
  end
end

p gets.chop.to_i.step
