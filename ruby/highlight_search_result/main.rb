require_relative "rb/highlight_search_result.rb"

search_word = gets.chop
string = gets.chop
patt = Regexp.new(search_word, "i")
puts string.split("\s").search_word_length(patt)
puts string.gsub(patt) { |match| "(" + search_word + ")" }
