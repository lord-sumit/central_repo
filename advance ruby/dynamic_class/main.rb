require_relative "./lib/dynamic_class.rb"

p "Please enter the class name:"
class_name = gets.chop
class_name = DynamicClass.create_class(class_name)
p "Please enter the method name you wish to define:"
method_name = gets.chomp
p "Please enter the method's code:"
method_inner_code = gets.chop
method_name = DynamicClass.create_method(class_name, method_name, method_inner_code)
puts "---Result---"
puts "Hello your class #{class_name} with method #{method_name} is ready. Calling:"
class_name.new.send (method_name)
