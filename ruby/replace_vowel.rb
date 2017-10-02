class String
  VOWEL_REGEX = /[aeiou]/

  def replace_vowel
    gsub(VOWEL_REGEX, '*')
  end
end

puts gets.replace_vowel
