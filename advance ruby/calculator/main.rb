require_relative "./lib/object.rb"

array = gets.chomp.split(",")
puts array[0].to_i.send_with_arg(array[1].chars[1], array[2].to_i)
