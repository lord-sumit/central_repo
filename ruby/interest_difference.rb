class Interest
  attr_reader :rate
  @rate = 10
  def initialize(principal, time)
    @principal = principal
    @time = time
  end

  def simply
    principal * rate * time
  end

  def compoundedly
    principal * (1 + rate)**n - principal
  end
end

