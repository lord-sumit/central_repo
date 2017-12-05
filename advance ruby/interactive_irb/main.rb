require_relative "./lib/interactive_program"

irprogram = InteractiveProgram.new

execute_string = ""

till = true

while(till)

  str = gets.chop

  if(str == 'q')
    till = false
  end

  if(str.length == 0)
    irprogram.execute_line(execute_string)
  end

  execute_string = execute_string + ';' + str

end
