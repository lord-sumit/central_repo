require_relative "factorial_ranges.rb"

class Integer
  def pascal
    line = 0
    while(line < self)
      integer = 0
      while integer <= line
        yield(line, integer)
        integer += 1
      end
      p " "
      line += 1
    end
  end
end

gets.chomp.to_i.pascal do |line, integer|
  print line.factorial / ((line - integer).factorial * integer.factorial)
end
