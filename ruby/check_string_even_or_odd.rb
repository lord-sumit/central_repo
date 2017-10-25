class Array
  def check_even_odd
    group_by { |element| element.length }
      .each { |array_element| array_element.pop }
      .group_by do |element|
        if element[0].length.even?
          "even"
        else
          "odd"
        end
      end
  end
end

puts gets.chop.split("\s").check_even_odd
