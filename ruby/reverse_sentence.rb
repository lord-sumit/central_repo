class String
  def reverse_sentence
    split(" ").reverse.join(" ")
  end
end

puts gets.chop.reverse_sentence
