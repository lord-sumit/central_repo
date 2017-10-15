class String
  def character_count
    a = Hash.new()
    a['lowercase_c'] = count ('a'..'z').to_a.to_s
    a['uppercase_c'] = count ('A'..'Z').to_a.to_s
    a['numeric_c'] = count (0..9).to_a.to_s
    a['special_c'] = count ('!'..'?').to_a.to_s
    return a
  end
end
