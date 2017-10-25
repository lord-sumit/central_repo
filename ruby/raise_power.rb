class Array
  def raise_power!(power)
    map! { |element| element ** power  }
  end

  def to_i
    map! { |element| element.to_i }
  end
end

p gets.chop.split(/\s/).to_i.raise_power!(gets.chomp.to_i)
