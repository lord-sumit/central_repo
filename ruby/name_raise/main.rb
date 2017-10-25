require_relative "lib.rb/name_raise.rb"

name = Name.new()
name.first_name = gets.chop
name.last_name = gets.chop
name.str_empty?
name.chr_cap?
