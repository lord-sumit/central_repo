# Count the occurence of various alphabet letters in an input String and store it in hash.
#Your ruby program should accept a string as an argument and display the hash as an output.
class String
  def character_count
    return "Please provide an input" if self.empty?
    character_count = Hash.new(0)
    each_char { |char| character_count[char] += 1 }
    character_count
  end
end

puts gets.chop.character_count
