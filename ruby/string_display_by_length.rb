class Array
  def display_by_length
    group_by { |element| element.length }
  end
end
