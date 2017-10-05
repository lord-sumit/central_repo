class Account
  attr_reader :name, :account_no
  attr_accessor :balance
  @@accounts = 0

  def initialize(name, balance)
    @name = name
    @balance = balance
    @account_no = @@accounts += 1
  end

  def deposit(credit)
    if valid_number(credit)
      @balance += credit
    end
  end

  def withdraw(debit, deposit_to)
    if valid_number(debit)
      if(debit < @balance)
        @balance -= debit
        deposit_to.deposit(debit)
      else
        puts "you cannot withdraw money because account haven't money"
      end
    end
  end

  def valid_number(amount)
    if amount < 0
      puts "amount should be +ve"
      return false
    elsif amount == 0
      puts "amount should be a number"
      return false
    else
      return true
    end
  end

  def to_s
    "name: #{@name}, account_no: #{@account_no}, balance: #{@balance}"
  end

end

b = [" ", ":"]
a = gets.chop.split(/(\:|\s)/) - b
a1 = Account.new(a[0], a[1].to_i)
a2 = Account.new(a[2], a[3].to_i)
amount = a[5].to_i
a2.withdraw(amount, a1)
puts a1, a2
