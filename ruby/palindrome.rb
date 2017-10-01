class String
  def palindrome
    eql? reverse
  end
end

puts gets.chomp.palindrome
