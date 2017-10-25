require "prime"

class Integer
  def prime_upto
    array = [2]
    (3..self).step(2) { |number| array.push(number) if Prime.prime? number }
    return array
  end
end

p gets.chop.to_i.prime_upto
