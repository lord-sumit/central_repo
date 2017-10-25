require "csv"

class Employee

  @@employees = Array.new()

  attr_accessor :name, :emp_id, :designation

  def self.to_initialize_csv(path)
    CSV.foreach(path, headers: true, header_converters: :symbol) do |row|
      @@employees << Employee.new(row[:name].strip, row[:empid].strip, row[:designation].strip)
    end
  end

  def initialize(name, emp_id, designation)
    self.name = name
    self.emp_id = emp_id
    self.designation  = designation
  end

  def self.export_to_csv(path)
    @@employees = @@employees.sort_by { |employee|  employee.designation }
                             .group_by { |employee| employee.designation }
    CSV.open(path, "wb") do |csv|
      @@employees.each do |designation, employees|
        write_designation(csv, designation, employees.count)
        write_employees(csv, employees)
        csv << []
      end
    end
  end

  def self.write_designation(file, designation, employees_count)
    file <<  [(designation + (employees_count > 1 ?  "s" : ''))]
  end

  def self.write_employees(file, employees)
    employees.each { |employee| file << ["#{ employee.name } (EmpId: #{ employee.emp_id })"] }
  end
end
