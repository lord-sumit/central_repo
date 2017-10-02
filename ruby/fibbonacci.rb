class Integer
  def generate_fibonacci
    previous_number = 0
    next_number = 1
    while previous_number >= 0
      previous_number, next_number = yield(previous_number, next_number)
      exit if next_number > self
    end
  end
end

gets.chomp.to_i.generate_fibonacci do |previous_number, next_number|
  puts next_number
  [next_number, previous_number + next_number]
end
