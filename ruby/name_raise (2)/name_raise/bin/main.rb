require_relative '../lib/name.rb'

name = Name.new
begin
  puts "enter the first name"
  name.firstname = gets.chomp
  puts "enter the last name"
  name.lastname = gets.chomp
  name.validate
  puts name
rescue BlankStringError, CapitalizeError => e
  puts e.message
  retry
end
