class ShoppingList
  @list = []

  def items
    yield
    yield
  end

  def add(item_name, quantity)
    @list = { :item_name => quantity }
  end

end
